import * as React from 'react';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title: string;
  onSave?: () => void;
  onCancel?: () => void;
  children?: React.ReactNode;
}

export default function Drawer({ open, onClose, title, onSave, onCancel, children }: DrawerProps) {
  const handleCancel = () => {
    onCancel ? onCancel() : onClose();
  };
  const handleSave = () => {
    if (onSave) onSave();
    else onClose();
  };

  const list = (
    <Box
      sx={{
        width: 420,
        maxWidth: '100vw',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      role="presentation"
    >
      <Box sx={{ p: 3, pb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6">{title}</Typography>
        <Button variant="text" onClick={onClose}>Kapat</Button>
      </Box>
      <Divider />
      <Box sx={{ p: 3, flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
        {children}
      </Box>

      <Divider />
      <Box sx={{ p: 3, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
        <Button onClick={handleCancel} variant="outlined" color="secondary">İptal</Button>
        <Button onClick={handleSave} variant="contained" color="primary">Kaydet</Button>
      </Box>
    </Box>
  );

  return (
    <MuiDrawer
      anchor="right"
      open={open}
      onClose={onClose}
    >
      {list}
    </MuiDrawer>
  );
}
