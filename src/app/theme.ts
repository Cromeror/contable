import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#f50057',
        },
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                subtitle2: {
                    fontSize: 16,
                    color: '#3f51b5',
                    fontWeight: 600,
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'capitalize',
                },
            },
            variants: [
                {
                    props: { variant: 'contained' },
                    style: {
                        borderRadius: 50,
                        backgroundColor: 'secondary.main',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'secondary.dark',
                        },
                    },
                }
            ],
        },
    },
};