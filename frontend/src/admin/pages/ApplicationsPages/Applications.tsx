import React, { useEffect, useState } from 'react';
import api from '../../../services/api';

function Applications() {
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/api/applications').then(res => {
      setApplications(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Başvurular</h1>
      {loading ? (
        <div>Yükleniyor...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {applications.map(app => (
            <div key={app.id} className="border rounded-lg p-6 shadow bg-white flex flex-col gap-4">
              <div className="flex gap-4">
                {app.selfieUrl && app.selfieUrl !== '' && <img src={app.selfieUrl.startsWith('http') ? app.selfieUrl : `http://localhost:3000${app.selfieUrl}`} alt="Selfie" className="w-24 h-24 object-cover rounded" />}
                {app.profilePhoto && app.profilePhoto !== '' && <img src={app.profilePhoto.startsWith('http') ? app.profilePhoto : `http://localhost:3000${app.profilePhoto}`} alt="Profil" className="w-24 h-24 object-cover rounded" />}
                {app.fullBodyPhoto && app.fullBodyPhoto !== '' && <img src={app.fullBodyPhoto.startsWith('http') ? app.fullBodyPhoto : `http://localhost:3000${app.fullBodyPhoto}`} alt="Vücut" className="w-24 h-24 object-cover rounded" />}
              </div>
              <div>
                <div className="font-bold text-lg">{app.fullName}</div>
                <div className="text-sm text-slate-500">{app.email} | {app.phone}</div>
                <div className="text-sm text-slate-500">{app.city} | {app.gender} | {app.heightCm} cm</div>
                <div className="text-xs text-slate-400 mt-2">Başvuru Tarihi: {new Date(app.submittedAt).toLocaleString()}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Applications
