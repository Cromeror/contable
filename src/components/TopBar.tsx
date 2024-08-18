import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button, Divider, Grid } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';

export const TopBar = () => {
  const router = useRouter()
  const pathname = usePathname()

  const SidebarSettings = [
    {
      title: 'Transactions',
      path: '/dashboard/transactions',
    },
    {
      title: 'Plan contable',
      path: '/dashboard/accounts',
    },
    {
      title: 'Terceros',
      path: '/dashboard/third-parties',
    }
  ]

  return (
    <>
      <Grid container className="max-h-[64px] min-h-[64px] px-6" alignItems={"center"}>
        <Box className="flex gap-2">
          {SidebarSettings.map(setting => (
            <Button
              key={setting.title.replace(' ', '_')}
              variant={pathname === setting.path ? 'contained' : 'text'}
              onClick={() => router.push(setting.path)}
              className='rounded-xl'>
              {setting.title}
            </Button>
          ))}
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Box>
      </Grid>
      <Divider />
    </>
  );
}
