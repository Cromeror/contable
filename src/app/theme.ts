import { ThemeOptions } from '@mui/material/styles';
import "@fontsource/open-sans"; 
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/600.css";

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
    typography: {
        fontFamily: 'Open Sans',
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                subtitle2: {
                    fontSize: 16,
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
                },
                {
                    props: { variant: 'outlined' },
                    style: {
                        borderRadius: 50,
                    },
                }
            ],
        },
    },
};