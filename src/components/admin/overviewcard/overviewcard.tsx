// components/OverviewCards.tsx
import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';

const data = [
  { title: 'Product Viewed', value: '411.9K', change: '+2.5%', color: '#6200ea' },
  { title: 'Product Shared', value: '230.4K', change: '+13.3%', color: '#6200ea' },
  { title: 'Product Added to Cart', value: '20.9K', change: '-4.3%', color: '#6200ea' },
  { title: 'Product Checked Out', value: '410.54K', change: '+32.2%', color: '#6200ea' },
  { title: 'Product Re-Ordered', value: '200K', change: '-15%', color: '#6200ea' },
];

const OverviewCards: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {data.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary">{item.title}</Typography>
              <Typography variant="h5" sx={{ color: item.color }}>{item.value}</Typography>
              <Typography variant="subtitle2" color="textSecondary">{item.change}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default OverviewCards;
