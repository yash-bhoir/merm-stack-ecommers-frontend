// components/RevenueChart.tsx
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const RevenueChart: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Total Revenue</Typography>
        <Box sx={{ height: 300 }}>
          {/* Implement your chart here */}
          <Typography variant="body2">Chart goes here</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
