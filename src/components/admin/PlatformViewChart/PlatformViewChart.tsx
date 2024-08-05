// components/PlatformViewChart.tsx
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const PlatformViewChart: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Platform View</Typography>
        <Box sx={{ height: 300 }}>
          {/* Implement your chart here */}
          <Typography variant="body2">Chart goes here</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PlatformViewChart;
