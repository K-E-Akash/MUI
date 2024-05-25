import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Box, Drawer, List, ListItemIcon, ListItemText, ListSubheader, ListItemButton } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {

    const navigate = useNavigate()

    const menuItems = [
        {
            "text": "Home",
            "icon": <HomeIcon />,
            "link": '/'
        },
        {
            "text": "Dashboard",
            "icon": <DashboardIcon />,
            "link": '/Dashboard'
        },
    ]

    return (
        <>
            <Box sx={{
                display: 'flex'
            }}>

                <Drawer
                    variant="permanent"
                    anchor="left"
                    sx={{
                        width: '100%',
                        maxWidth: '200px',
                    }}>

                    <List
                        subheader={
                            <ListSubheader>
                                Menu
                            </ListSubheader>
                        }
                        sx={{
                            padding: '20px'
                        }}>
                        {menuItems.map((e, i) => {
                            return (
                                <ListItemButton key={i} onClick={() => {navigate(e.link)}}>
                                    <ListItemIcon>
                                        {e.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={e.text} />
                                </ListItemButton>
                            )
                        })}
                    </List>
                </Drawer>

                {children}
            </Box>
        </>
    )
}

export default Layout