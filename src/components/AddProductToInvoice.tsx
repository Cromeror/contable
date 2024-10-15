import { Button, Divider, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material"
import { InfinityAutoCompleteInput } from "./InfinityAutoCompleteInput";

export const AddProductToInvoice = () => {
    return (
        <Stack spacing={2} sx={{ py: 2 }}>
            <InfinityAutoCompleteInput />
            <TextField label="Descripción" multiline rows={3} sx={{ width: '100%' }} />
            <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
                <Stack direction={"row"} spacing={2} sx={{ width: '100%' }}>
                    <TextField label="Cantidad" type="number" sx={{ width: '12%' }} />
                    <TextField label="Valor unitario" sx={{ width: '25%' }} />
                    <TextField label="Descuento" sx={{ width: '25%' }} />
                </Stack>
                <Stack direction={"row"} spacing={2} sx={{ width: '30%' }}>
                    <FormControl sx={{ width: '100%' }}>
                        <InputLabel>Imp. Cargo</InputLabel>
                        <Select
                            id="demo-simple-select"
                            value={10}
                            label="Imp. Cargo"
                            onChange={() => { }}
                        >
                            <MenuItem value={10}>19%</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ width: '100%' }}>
                        <InputLabel >Retención</InputLabel>
                        <Select
                            id="demo-simple-select"
                            value={10}
                            label="Retención"
                            onChange={() => { }}
                        >
                            <MenuItem value={10}>3%</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
            </Stack>
            <Stack direction={"row"} justifyContent={"flex-end"} spacing={2}>
                <Button variant="contained">Agregar item</Button>
            </Stack>
            <Divider sx={{ width: '100%' }} />
        </Stack>
    )
}
