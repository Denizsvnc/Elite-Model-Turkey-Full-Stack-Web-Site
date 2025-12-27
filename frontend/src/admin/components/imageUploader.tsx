import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useDropzone } from 'react-dropzone';
const API_BASE = (import.meta as any).env?.VITE_API_BASE || 'http://localhost:3005';

export default function ImageUploader({ files, setFiles, onUploaded, folder = 'sliders' }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'image/*': [] },
    onDrop: async (acceptedFiles) => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        )
      );
      // Auto-upload first file
      if (acceptedFiles[0]) {
        const formData = new FormData();
        formData.append('file', acceptedFiles[0]);
        try {
          const res = await fetch(`${API_BASE}/api/uploads?folder=${folder}`, {
            method: 'POST',
            body: formData,
          });
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const data = await res.json();
          // Use relative URL for DB; frontend will prefix when rendering
          if (onUploaded) onUploaded(data.url);
        } catch (e) {
          console.error('Upload failed', e);
        }
      }
    },
  });

  const uploadFirst = async () => {
    if (!files?.length) return;
    const formData = new FormData();
    formData.append('file', files[0]);
    try {
      const res = await fetch(`${API_BASE}/api/uploads?folder=${folder}`, {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (onUploaded) onUploaded(data.url);
    } catch (e) {
      console.error('Upload failed', e);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h6" sx={{marginTop:0}}>Görsel Yükle</Typography>
      <Box
        {...getRootProps()}
        sx={{
          width: '100%',
          mt: 2,
          border: '2px dashed gray',
          borderRadius: 2,
          p: 4,
          textAlign: 'center',
          cursor: 'pointer',
          backgroundColor: isDragActive ? '#f0f0f0' : 'transparent',
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Dosyayı buraya bırakın...</p>
        ) : (
          <p>Dosya seçmek için tıklayın veya buraya sürükleyin</p>
        )}
      </Box>

      {files.length > 0 && (
        <Box sx={{ mt: 2 }}>
          {files.map((file) => (
            <img
              key={file.name}
              src={file.preview}
              alt={file.name}
              style={{ width: '100%', marginTop: 10, borderRadius: 4 }}
            />
          ))}
          <Button variant="contained" sx={{ mt: 2 }} onClick={uploadFirst}>Yükle</Button>
        </Box>
      )}
    </Box>
  );
}
