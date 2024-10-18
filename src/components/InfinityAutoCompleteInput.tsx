
import React, { useState, useEffect, useCallback } from "react";
import { Autocomplete, CircularProgress, SxProps, TextField, Theme } from "@mui/material";
import { usePucQuery } from "@/queries/pucQueries";
import { PucAccount } from "@/app/api/puc/definitions";

type Props = {
    sx?: SxProps<Theme>;
    label?: string;
    onChage?: (value: any) => void;
    name?: string;
    value?: any;
}

export const InfinityAutoCompleteInput = ({ sx, label, onChage, value, ...props }: Props) => {
    const [options, setOptions] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const { refetch } = usePucQuery({
        skip: page * 10,
        take: 10,
    })

    const handleRefetch = async () => {
        const { data } = await refetch();
        return data;
    };

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const response: [] = await handleRefetch()
            setOptions([...options, ...response]);
            setHasMore(response.length > 0);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        setLoading(false);
    }, [page]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleScroll = (event: any) => {
        const listboxNode = event.currentTarget;
        if (
            listboxNode.scrollTop + listboxNode.clientHeight >=
            listboxNode.scrollHeight - 100
        ) {
            if (!loading && hasMore) {
                setPage((prevPage) => prevPage + 1);
            }
        }
    };

    return (
        <Autocomplete
            {...props}
            onChange={(_, newValue) => {
                const { id } = newValue as PucAccount
                onChage && onChage(id)
            }}
            sx={{ width: '100%', ...sx }}
            options={options}
            loading={loading}
            ListboxProps={{
                onScroll: handleScroll,
                style: { maxHeight: 300, overflow: "auto" },
            }}
            getOptionLabel={(option: { description: string, code: number }) => option.description}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label || 'Agrega un producto'}
                    variant="outlined"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </>
                        ),
                    }}
                />
            )}
        />
    );
};
