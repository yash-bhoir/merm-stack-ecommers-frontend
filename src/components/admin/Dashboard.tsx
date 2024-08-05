// App.tsx
import React, { useState } from 'react';
import { CssBaseline, Box, Container } from '@mui/material';
import Sidebar from '../admin/sidebar/Sidebar';
import Header from '../admin/header/Header';

import OverviewCards from '../admin/overviewcard/overviewcard';
import PlatformViewChart from '../admin/PlatformViewChart/PlatformViewChart';
import RevenueChart from '../admin/RevenueChart/RevenueChart';
import TopPlatformCard from '../admin/TopPlatformCard/TopPlatformCard';
import UserByCountryCard from '../admin/UserByCountryCard/UserByCountryCard';
import BestSellerCard from '../admin/BestSellerCard/BestSellerCard';

const Dashboard: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} /> {/* Pass setOpen to Sidebar */}
        <Box component="main" sx={{ flexGrow: 1, p: 3, transition: 'margin 0.3s' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Header />
          </Box>
          <Container maxWidth="lg">
            <OverviewCards />
            <Box sx={{ display: 'flex', gap: 2, marginTop: 3 }}>
              <Box sx={{ flex: 3 }}>
                <PlatformViewChart />
              </Box>
              <Box sx={{ flex: 1 }}>
                <RevenueChart />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, marginTop: 3 }}>
              <TopPlatformCard />
              <UserByCountryCard />
              <BestSellerCard />
            </Box>
          </Container>
        </Box>
      </Box>
    );
  };
  
export default Dashboard;
