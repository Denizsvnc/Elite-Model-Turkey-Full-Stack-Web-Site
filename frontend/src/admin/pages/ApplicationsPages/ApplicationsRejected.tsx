import api from "../../../services/api";
import {useState, useEffect} from 'react';
import {Box, Typography, Button} from '@mui/material';
const ApplicationsRejected : React.FC = () => {
    const [applications, setApplications] = useState<any[]>([]);
    useEffect(()=>{
        const getAllRejectedApplications = async ()=>{
            try{
                const response = await api.get("/api/applications?status=REJECTED");
                setApplications(response.data);
            }catch(error){console.error("Red Edilen Başvurular Alınamadı:", error);};
                
        }
        getAllRejectedApplications();
    },[]);
  return(
    <>
       <Box sx={{marginTop:"20px", fontSize:"18px", fontWeight:"bold"}}>
            <Typography variant='h5' sx={{alignItems:"center",  textAlign:"left"}}>Red Edilen Başvurular</Typography>
        </Box>
        <Box sx={{marginTop:"20px"}}>
            {applications.length === 0 ? (
                <Typography>Red edilen başvuru yok.</Typography>
            ) : (
                applications.map((app) => (
                    <Box key={app.id} sx={{border:"1px solid gray", borderRadius:"10px", padding:"10px", marginBottom:"10px"}}>
                        <Typography><strong>Ad Soyad:</strong> {app.fullName}</Typography>
                        <Typography><strong>Email:</strong> {app.email}</Typography>    
                        <Typography><strong>Telefon:</strong> {app.phone}</Typography>
                        <Typography><strong>Durum:</strong> {app.status}</Typography>
                        <Typography><strong>Gönderilme Tarihi:</strong> {new Date(app.submittedAt).toLocaleDateString()}</Typography>
                        <Button variant="contained" color="success" onClick={async () => {
                            await api.patch(`/api/applications/${app.id}`, { status: "ACCEPTED" });
                            setApplications(applications.filter(a => a.id !== app.id));
                        }}>Onayla</Button> &nbsp;
                        <Button variant="outlined" color="success" onClick={async () => {
                            await api.patch(`/api/applications/${app.id}`, { status: "REVIEW" });
                            setApplications(applications.filter(a => a.id !== app.id));
                        }}>İNCELEMEYE AL!</Button> &nbsp;
                        <Button variant="outlined" color="error" onClick={async () => {
                            await api.delete(`/api/applications/${app.id}`);
                            setApplications(applications.filter(a => a.id !== app.id));
                        }}>REDDET ve SİL!</Button>



                    </Box>
                ))
            )}
        </Box>
    </>
  );
}
export default ApplicationsRejected;