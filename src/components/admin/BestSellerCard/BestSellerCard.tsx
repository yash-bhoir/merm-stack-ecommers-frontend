// components/BestSellerCard.tsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const BestSellerCard: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Your product best seller</Typography>
        <Typography variant="body1">Sambal Bag Shoe</Typography>
        <Typography variant="body2">7.2b Favourited • 1.2b Checked-out</Typography>
      </CardContent>
    </Card>
  );
};

export default BestSellerCard;
