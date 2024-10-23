
import { Box, CircularProgress, FormControl, InputLabel, ListItemText, MenuItem, MenuList, Popover, Stack, SxProps, TextField, Theme } from "@mui/material";
import { debounce } from "lodash";
import React, { useCallback, useEffect, useRef, useState } from "react";

type Props = {
    sx?: SxProps<Theme>;
    label?: string;
    onChage?: (value: any) => void;
    name?: string;
    value?: any;
}

const buildQuery = (params: any = {}): string => {
    const query = "?" + Object.keys(params)
        .map(key => (params[key] || params[key] >= -1) ? `${key}=${params[key]}` : '')
        .join('&')
        .replace(/&$/, '')

    return query === "?" ? "" : query
}

const getPucData = async (params?: { skip?: number, take?: number, search?: string }) => {
    const response = await fetch(`/api/puc${buildQuery(params)}`)
    const data = await response.json()
    return data
}


export const InfinityAutoCompleteInput = ({ sx, label, onChage, value }: Props) => {
    const anchorEl = useRef<HTMLInputElement>(null);
    const [showPopover, setShowPopover] = useState(false);
    const [selectedOption, setSelectedOption] = React.useState<any>(null);
    const [page, setPage] = React.useState(0);
    const [options, setOptions] = useState<{
        isLoading: boolean,
        data: any[]
    }>({
        isLoading: false,
        data: [],
    });

    const optiosnBackup = useRef<any[]>()

    useEffect(() => {
        setOptions({ isLoading: true, data: [] })
        getPucData({ take: 10, skip: page }).then(data => {
            setOptions({ data, isLoading: false })
            optiosnBackup.current = data
        })
    }, [])

    const onSearchHandler = useCallback(
        debounce(async ({ search }: { search: string }) => {
            optiosnBackup.current = options.data
            setOptions({ isLoading: true, data: [] })

            const searchresult = await getPucData({ search })
            setOptions({
                data: searchresult,
                isLoading: false,
            })
        }, 300), []
    )

    const onSelectHandler = (option: any) => {
        setSelectedOption(option)
        setOptions({ isLoading: false, data: optiosnBackup.current || [] })
        setShowPopover(false)
        onChage && onChage(option)
    }

    const onClosePopover = () => {
        setOptions({ isLoading: false, data: optiosnBackup.current || [] })
        setShowPopover(false)
    }

    return (
        <>
            <TextField
                label={label}
                ref={anchorEl}
                value={selectedOption?.description}
                onClick={() => setShowPopover(true)}
                InputLabelProps={{ shrink: !!selectedOption }}
                fullWidth
            />
            <Popover
                open={showPopover}
                anchorEl={anchorEl.current}
                onClose={onClosePopover}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <Stack sx={{ p: 2, maxHeight: "40vh" }} spacing={1}>
                    <TextField
                        label={label}
                        sx={{ width: '100%' }}
                        inputProps={{
                            autoComplete: 'off',
                        }}
                        onChange={
                            (value) => (value.target.value.length > 3) && onSearchHandler({ search: value.target.value })
                        } />
                    {options.isLoading
                        ? <CircularProgress />
                        : <MenuList dense sx={{ minWidth: "330px", maxWidth: "50vw", overflowY: 'auto' }}>
                            {options.data.map(option => (
                                <MenuItem key={option.id} onClick={() => onSelectHandler(option)}>
                                    <ListItemText>{option.description}</ListItemText>
                                </MenuItem>
                            ))}
                        </MenuList>}
                </Stack>
            </Popover>
        </>
    )
};
