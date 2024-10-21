
import { ListItemText, MenuItem, MenuList, Popover, SxProps, TextField, Theme, Typography } from "@mui/material";
import React, { useCallback, useEffect, useRef } from "react";
import { debounce } from "lodash";

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

const searchOptions = debounce((params?: { skip?: number, take?: number, search?: string }) => {
    return new Promise((resolve, reject) => {
        getPucData(params)
            .then(resolve)
            .catch(reject);
    });
}, 300)

export const InfinityAutoCompleteInput = ({ sx, label, onChage, value, ...props }: Props) => {
    const anchorEl = React.useRef<HTMLInputElement>(null);
    const [showPopover, setShowPopover] = React.useState(false);
    const [options, setOptions] = React.useState<any[]>([]);
    const [selectedOption, setSelectedOption] = React.useState<any>(null);
    const [page, setPage] = React.useState(0);

    const optiosnBackup = useRef<any[]>()

    useEffect(() => {
        getPucData({ take: 10, skip: page }).then(data => {
            setOptions(data)
        })
    }, [])

    return (
        <>
            <TextField
                {...props}
                ref={anchorEl}
                value={selectedOption?.description}
                onClick={() => setShowPopover(true)} />
            <Popover
                open={showPopover}
                anchorEl={anchorEl.current}
                onClose={() => setShowPopover(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <TextField
                    {...props}
                    inputProps={{
                        autoComplete: 'off',
                    }}
                    onChange={(value) => {
                        if (value.target.value.length > 3) {
                            console.log("searchOptions", searchOptions);

                            const t = searchOptions({ search: value.target.value })
                            console.log(t);
                            t.then((data: any) => {
                                console.log(data);
                            })
                            /* .then((data: any) => {
                                optiosnBackup.current = options
                                setOptions(data)
                            }) */
                        }
                    }} />
                <MenuList dense>
                    {options.map(option => (
                        <MenuItem key={option.id}>
                            <ListItemText inset>{option.description}</ListItemText>
                        </MenuItem>
                    ))}
                </MenuList>
            </Popover>
        </>
    )
};
