import React from 'react';
import { Box, Typography, TextField } from '@mui/material';

type Lang = { code: string; label: string };

interface MultiLangTextProps {
  label: string;
  values: Record<string, string>;
  onChange: (code: string, value: string) => void;
  languages?: Lang[];
  required?: boolean;
  multiline?: boolean;
  rows?: number;
}

const defaultLanguages: Lang[] = [
  { code: 'tr', label: 'Türkçe' },
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
  { code: 'ru', label: 'Русский' },
];

function MultiLangText({
  label,
  values,
  onChange,
  languages = defaultLanguages,
  required,
  multiline,
  rows = 3,
}: MultiLangTextProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
        {label}
      </Typography>
      {languages.map((lang) => (
        <TextField
          key={lang.code}
          label={`${label} (${lang.label})`}
          fullWidth
          required={required}
          value={values?.[lang.code] || ''}
          onChange={(e) => onChange(lang.code, e.target.value)}
          multiline={multiline}
          rows={multiline ? rows : undefined}
        />
      ))}
    </Box>
  );
}

export default MultiLangText;
