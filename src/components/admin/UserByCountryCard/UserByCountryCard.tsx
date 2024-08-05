// components/UserByCountryCard.tsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const UserByCountryCard: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Your most user by country</Typography>
        <Typography variant="body1">Indonesia</Typography>
      </CardContent>
    </Card>
  );
};

export default UserByCountryCard;
