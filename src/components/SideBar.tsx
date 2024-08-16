import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentCut from '@mui/icons-material/ContentCut';
import { useRouter } from 'next/navigation';
import { Box } from '@mui/material';

const SidebarSettings = [
  {
    title: 'Transactions',
    icon: ContentCut,
    path: '/dashboard/transactions',
  },
  {
    title: 'Plan contable',
    icon: ContentCut,
    path: '/dashboard/accounts',
  },
  {
    title: 'Terceros',
    icon: ContentCut,
    path: '/dashboard/third-parties',
  }
]

export const SideBar = () => {
  const router = useRouter()

  return (
    <Paper sx={{ width: 320, maxWidth: '100%', minHeight: "100vh" }}>
      <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: 50 }}></Box>
      <MenuList>
        {SidebarSettings.map(setting => (
          <MenuItem key={setting.title.replace(' ', '_')} onClick={() => router.push(setting.path)}>
            <ListItemIcon>
              <setting.icon fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              {setting.title}
            </ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
}