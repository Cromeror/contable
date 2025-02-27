import * as React from 'react';
import { Fragment } from 'react';
import ContentCut from '@mui/icons-material/ContentCut';
import { usePathname, useRouter } from 'next/navigation';
import { Button, Divider, Grid, IconButton, Typography } from '@mui/material';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ReceiptIcon from '@mui/icons-material/Receipt';
import classNames from 'classnames';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { MODAL_REGISTERED, modalManagerStore, openModal } from '@/redux/modalManagerSlice';
import Link from 'next/link';

type MenuSetting = {
  title: string;
  icon: any;
  path: string;
  children?: MenuSetting[];
}

type ActionSetting = {
  title: string;
  icon: any;
  path: string;
  onClick?: () => void;
}

const menuSettings: MenuSetting[] = [
  {
    title: 'Movimientos',
    icon: ListAltIcon,
    path: '/dashboard/transactions',
    // children: [
    //   {
    //     title: 'Nuevo comprobante',
    //     icon: ReceiptIcon,
    //     path: '/dashboard/transactions/bills',
    //   }
    // ],
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
  },
  {
    title: 'Products',
    icon: ContentCut,
    path: '/dashboard/products',
  }
]

export const SideBar = () => {
  const router = useRouter()
  const pathname = usePathname()

  const actions: ActionSetting[] = [
    {
      title: 'Nuevo comprobante',
      icon: ReceiptIcon,
      path: '/dashboard/transactions/bills',
    },
    {
      title: 'Nueva factura',
      icon: ReceiptIcon,
      //onClick: () => modalManagerStore.dispatch(openModal(MODAL_REGISTERED.INVOICE_FORM)),
      path: '/dashboard/documents',
    },
  ]

  const actionClickHandler = (action: ActionSetting) => {
    action.onClick && action.onClick()
  }

  return (
    <Grid container spacing={2} direction={"column"} className='h-full max-h-[99.9vh]'>
      <Grid item>
        <Typography variant="h4">
          Lobo Gris
        </Typography>
        <Divider />
      </Grid>
      <Grid item className='h-fit pb-4' flexGrow={1}>
        <Grid container xs={12} justifyContent={"space-between"} className='h-full'>
          <Grid item xs={12}>
            {menuSettings.map(setting => (
              <Fragment key={setting.title.replace(' ', '_')}>
                <Grid item xs={12} onClick={() => router.push(setting.path)} className='pb-1'>
                  <Button
                    startIcon={<setting.icon fontSize="small" />}
                    variant={pathname === setting.path ? 'contained' : 'text'}
                    className='rounded-xl w-full'>
                    <Typography className='text-left w-full'>
                      {setting.title}
                    </Typography>
                  </Button>
                </Grid>
                {
                  setting?.children?.map(child => (
                    <Grid item xs={12} key={child.title.replace(' ', '_')}>
                      <Button
                        className='w-full'
                      >
                        <span className={classNames('pl-4 text-left w-full decoration-2 underline-offset-8 transition-transform', {
                          underline: pathname === child.path,
                        })}>
                          {child.title}
                        </span>
                      </Button>
                    </Grid>
                  ))
                }
              </Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction={"column"}>
        {actions.map(action => (
          <Grid item key={action.title.replace(' ', '_')}>
            <Button
              className='w-full'
              onClick={() => actionClickHandler(action)}
            >
              <Link href={action.path} className={classNames(' text-left w-full decoration-2 underline-offset-8 transition-transform', {
                underline: pathname === action.path,
              })}>
                {action.title}
              </Link>
            </Button>
          </Grid>
        ))}
      </Grid>
      <Grid item>
        <Divider />
        <IconButton
          size="large"
          edge="end"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </Grid>
    </Grid>
  );
}