import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const AdminLayout: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f5f5f5' }}>
            <Topbar onMenuClick={handleDrawerToggle} />
            <Sidebar open={mobileOpen} onClose={handleDrawerToggle} />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { xs: '100%', md: `calc(100% - 280px)` },
                    ml: { xs: 0, md: '280px' },
                }}
            >
                <Toolbar /> {/* Spacing for fixed AppBar */}
                <Outlet />
            </Box>
        </Box>
    );
};

export default AdminLayout;
