// components/TopPlatformCard.tsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const TopPlatformCard: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Your top platform</Typography>
        <Typography variant="body1">Shopee</Typography>
        <Typography variant="body2">42.5b Member • 400 Product listed</Typography>
      </CardContent>
    </Card>
  );
};

export default TopPlatformCard;
