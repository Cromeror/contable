import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Box, InputAdornment } from '@mui/material';

export const Search = () => {
    return (
        <Box className="border-[1px] rounded-lg border-slate-200 pr-3 flex items-center min-w-[400px]"
            sx={{ p: '2px 4px' }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Escribe tu busqueda aquí"
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton edge="end" >
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </Box>
    );
};