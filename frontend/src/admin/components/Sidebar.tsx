import React, { Children } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
    Box,
    Divider,
    Collapse,
} from '@mui/material';

interface SidebarProps {
    open: boolean;
    onClose: () => void;
}

const drawerWidth = 280;

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [expandedSections, setExpandedSections] = React.useState<{ [key: string]: boolean }>({});

    const toggleSection = (section: string) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const menuItems = [
        {
            title: 'Dashboard',
            path: '/admin/dashboard',
            icon: 'dashboard',
        },
        {
            title: 'Anasayfa Yönetimi',
            icon: 'home',
            section: 'home',
            children: [
                { title: 'Slider Görselleri', path: '/admin/sliders', icon: 'photo_library' },
                { title: 'Öne Çıkan Kişiler', path: '/admin/featured-items', icon: 'stars' },
                { title: 'Son Haberler', path: '/admin/news', icon: 'newspaper' },
            ]
        },
        {
            title: 'Başarımız Sayfası',
            icon: 'emoji_events',
            section: 'success',
            children: [
                { title: 'Hero Görseli', path: '/admin/heroimg', icon: 'military_tech' },

                { title: 'Başarılı Model', path: '/admin/success-model', icon: 'military_tech' },
                { title: 'Son Öne Çıkanlar', path: '/admin/latest', icon: 'rate_review' },
            ]
        },
        {
            title: 'Haberler',
            path: '/admin/news-management',
            icon: 'article',
        },
        {
            title: 'Hakkımızda',
            icon: 'info',
            section: 'about',
            children: [
                { title: 'About Us', path: '/admin/about/hero', icon: 'description' },
                { title: 'Vizyonumuz', path: '/admin/about/vision', icon: 'visibility' },
                { title: 'Misyonumuz', path: '/admin/about/mission', icon: 'flag' },
            ]
        },
        {
            title: 'İletişim',
            icon: 'contact_mail',
            section: 'contact',
            children: [
                { title: 'İletişim Bilgileri', path: '/admin/contact-info', icon: 'phone' },
                { title: 'Gelen Mesajlar', path: '/admin/contact-messages', icon: 'mail' },
            ]
        },
        {
            title: 'SSS',
            path: '/admin/faqs',
            icon: 'help',
        },
        {
            title: 'Başvurular',
            
            icon: 'people',
            children:[
                { title: 'Bekleyen Başvurular', path: '/admin/applications/pending', icon: 'hourglass_top' },
                { title: 'Onaylanan Başvurular', path: '/admin/applications', icon: 'check_circle' },
                { title: 'Reddedilen Başvurular', path: '/admin/applications/rejected', icon: 'cancel' },
            ]

        },
        {
            title: 'Sosyal Medya',
            path: '/admin/social-media',
            icon: 'share',
        },
        {
            title: 'Ayarlar',
            path: '/admin/settings',
            icon: 'settings',
        },
    ];

    const handleNavigation = (path: string) => {
        navigate(path);
        if (window.innerWidth < 960) {
            onClose();
        }
    };

    const isActive = (path: string) => location.pathname === path;

    const drawerContent = (
        <Box sx={{ overflow: 'auto' }}>
            <Toolbar
                sx={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'black',
                    minHeight: '64px !important',
                }}
            >
                <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 700 }}>
                    Elite Model Admin
                </Typography>
            </Toolbar>
            <Divider />
            <List sx={{ pt: 2 }}>
                {menuItems.map((item) => (
                    <React.Fragment key={item.title}>
                        {item.children ? (
                            <>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={() => toggleSection(item.section!)}>
                                        <ListItemIcon>
                                            <span className="material-symbols-outlined">
                                                {item.icon}
                                            </span>
                                        </ListItemIcon>
                                        <ListItemText primary={item.title} />
                                        <span className="material-symbols-outlined">
                                            {expandedSections[item.section!] ? 'expand_less' : 'expand_more'}
                                        </span>
                                    </ListItemButton>
                                </ListItem>
                                <Collapse in={expandedSections[item.section!]} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {item.children.map((child) => (
                                            <ListItem key={child.path} disablePadding>
                                                <ListItemButton
                                                    sx={{
                                                        pl: 4,
                                                        bgcolor: isActive(child.path) ? '##344feb' : 'transparent',
                                                        '&:hover': {
                                                            bgcolor: isActive(child.path) ? 'primary.light' : 'action.hover',
                                                        },
                                                    }}
                                                    onClick={() => handleNavigation(child.path)}
                                                >
                                                    <ListItemIcon>
                                                        <span
                                                            className="material-symbols-outlined"
                                                            style={{
                                                                fontSize: '20px',
                                                                color: isActive(child.path) ? 'black' : 'inherit',
                                                            }}
                                                        >
                                                            {child.icon}
                                                        </span>
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={child.title}
                                                        sx={{
                                                            '& .MuiListItemText-primary': {
                                                                fontSize: '0.9rem',
                                                                fontWeight: isActive(child.path) ? 600 : 400,
                                                                color: isActive(child.path) ? '#344feb' : 'inherit',
                                                            },
                                                        }}
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Collapse>
                            </>
                        ) : (
                            <ListItem disablePadding>
                                <ListItemButton
                                    sx={{
                                        bgcolor: isActive(item.path!) ? '#344feb' : 'transparent',
                                        '&:hover': {
                                            bgcolor: isActive(item.path!) ? 'primary.light' : 'action.hover',
                                        },
                                    }}
                                    onClick={() => handleNavigation(item.path!)}
                                >
                                    <ListItemIcon>
                                        <span
                                            className="material-symbols-outlined"
                                            style={{
                                                color: isActive(item.path!) ? '#667eea' : 'inherit',
                                            }}
                                        >
                                            {item.icon}
                                        </span>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.title}
                                        sx={{
                                            '& .MuiListItemText-primary': {
                                                fontWeight: isActive(item.path!) ? 600 : 400,
                                                color: isActive(item.path!) ? '#667eea' : 'inherit',
                                            },
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        )}
                    </React.Fragment>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            {/* Mobile Drawer */}
            <Drawer
                variant="temporary"
                open={open}
                onClose={onClose}
                ModalProps={{
                    keepMounted: true, // Better mobile performance
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                    },
                }}
            >
                {drawerContent}
            </Drawer>

            {/* Desktop Drawer */}
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', md: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                        borderRight: '1px solid rgba(0, 0, 0, 0.12)',
                    },
                }}
                open
            >
                {drawerContent}
            </Drawer>
        </>
    );
};

export default Sidebar;
