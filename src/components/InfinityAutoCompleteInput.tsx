
import React, { useState, useEffect, useCallback } from "react";
import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { usePucQuery } from "@/queries/pucQueries";

export const InfinityAutoCompleteInput = () => {
    const [options, setOptions] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const { isLoading, refetch } = usePucQuery({
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
                    label="Agrega un producto"
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