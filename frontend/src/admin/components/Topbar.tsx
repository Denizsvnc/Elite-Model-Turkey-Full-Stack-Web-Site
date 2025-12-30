import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Avatar, Menu, MenuItem , Link} from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface TopbarProps {
    onMenuClick: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ onMenuClick }) => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const adminUser = JSON.parse(localStorage.getItem('adminUser') || '{}');

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('adminUser');
        navigate('/admin/login');
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                background: 'white',
                color: 'black',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={onMenuClick}
                    sx={{ mr: 2, display: { md: 'none' } }}
                >
                    <span className="material-symbols-outlined">menu</span>
                </IconButton>

                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
                    Admin Panel
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <IconButton color="inherit">
                        <span className="material-symbols-outlined">notifications</span>
                    </IconButton>

                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}
                        onClick={handleMenu}
                    >
                        <Avatar
                            sx={{
                                width: 32,
                                height: 32,
                                bgcolor: '#667eea',
                                fontSize: '1rem',
                            }}
                        >
                            {adminUser.name?.[0] || 'A'}
                        </Avatar>
                        <Typography variant="body2" sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {adminUser.name || 'Admin'}
                        </Typography>
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                            arrow_drop_down
                        </span>
                    </Box>

                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <MenuItem onClick={handleClose}>
                            <span className="material-symbols-outlined" style={{ marginRight: '8px', fontSize: '20px' }}>
                                person
                            </span>
                            Profil
                        </MenuItem>
                        <Link href="/admin/settings" underline="none" color="inherit">
                            <MenuItem onClick={handleClose}>
                                <span className="material-symbols-outlined" style={{ marginRight: '8px', fontSize: '20px' }}>
                                    settings
                                </span>
                                Ayarlar
                            </MenuItem>
                        </Link>
                        <MenuItem onClick={handleLogout}>
                            <span className="material-symbols-outlined" style={{ marginRight: '8px', fontSize: '20px', color: '#f44336' }}>
                                logout
                            </span>
                            <Typography color="error">Çıkış Yap</Typography>
                        </MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Topbar;
