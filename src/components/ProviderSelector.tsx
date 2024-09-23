import { Edit } from "@mui/icons-material"
import { Autocomplete, Avatar, IconButton, Stack, TextField, Typography } from "@mui/material"
import React from "react"

type Provider = {
    label: string,
    name: string,
    contact: {
        name: string,
        email: string,
        phone: string,
    },
}

type Props = {
    dataSource: Provider[],
    onChange?: (value: Provider) => void,
    defaultValue?: any,
}

export const ProviderSelector = ({ onChange, dataSource = [], defaultValue }: Props) => {
    const [value, setValue] = React.useState(defaultValue)
    const [autoCompleteKey, setAutoCompleteKey] = React.useState(0)

    const options = dataSource?.map((item, index) => ({
        label: item.label,
        value: index,
    }))

    return (
        <Autocomplete
            disablePortal
            key={autoCompleteKey}
            options={options}
            onChange={(_, newValue) => {
                if (newValue === null) {
                    return
                }

                setValue(dataSource[newValue.value])
                onChange && onChange(dataSource[newValue.value])
            }}
            renderInput={(params) => {
                if (!value) return <TextField {...params} label="Proveedor" />

                return (
                    <Stack direction="row" alignItems="center" spacing={2} className="border-[1px] border-gray-300 rounded p-3">
                        <Avatar />
                        <Stack sx={{ width: '100%' }}>
                            <Typography sx={{ fontWeight: 'bold' }}>
                                {value?.contact.name}
                            </Typography>
                            <Typography sx={{ color: 'gray' }}>
                                {value?.contact.email}
                            </Typography>
                        </Stack>
                        <IconButton onClick={() => {
                            setAutoCompleteKey(Math.random())
                            setValue(null)
                        }}>
                            <Edit sx={{ color: 'gray' }} />
                        </IconButton>
                    </Stack>
                )
            }}
        />
    )
}