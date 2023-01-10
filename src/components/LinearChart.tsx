import React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface LinearProps {
    value: number
}

export const LinearProgressWithLabel: React.FC<LinearProps> = ({value}) => {
  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default LinearProgressWithLabel