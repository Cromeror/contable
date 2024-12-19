import React, { useEffect, useReducer, useRef, useState } from "react"
import { Box, CircularProgress, Divider, FormHelperText, ListItemText, MenuItem, MenuList, Popover, Stack, TextField, Tooltip } from "@mui/material"
import { getPucData, QueryPucParams } from "@/utils/pucUtils"
import { debounce } from "lodash"
import { PucAccount } from "@/app/api/puc/definitions"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

type Props = {
    onChange?: (value: any) => void,
}

enum ActionTypes {
    REFETCH_SUCCESS = "REFETCH_SUCCESS",
    LOADING = "LOADING",
    RESET = "RESET",
    SELECT_OPTION = "SELECT_OPTION",
}

type Actions = {
    type: ActionTypes;
    payload?: any;
}

type State = {
    options: PucAccount[];
    isLoading: boolean;
    showSuggestions: boolean;
    value?: PucAccount;
}

const initialState = { options: [], isLoading: false, showSuggestions: false }

const reducer = (state: State, action: Actions): State => {
    switch (action.type) {
        case ActionTypes.LOADING:
            return {
                ...state,
                isLoading: true,
                showSuggestions: true,
            }
        case ActionTypes.REFETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                showSuggestions: true,
                options: action.payload,
            }
        case ActionTypes.SELECT_OPTION:
            return {
                ...state,
                showSuggestions: false,
                value: action.payload,
            }
        case ActionTypes.RESET:
            return initialState
        default:
            console.warn("Unhandled action type:", action.type);
            return state
    }
}

const NO_OPTIONS_INITIAL_STATE = "Escribe para buscar una cuenta"

export const PucTextField = ({ onChange }: Props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const [code, setCode] = useState<string>("")
    const [subCode, setSubCode] = useState("")
    const [selectedOption, setSelectedOption] = React.useState<any>();

    const anchorEl = useRef<HTMLInputElement>(null);

    // useEffect(() => {
    //     onChange?.(code + subCode)
    // }, [code, subCode, onChange])

    const refresh = debounce((queryParams: QueryPucParams) => {
        dispatch({ type: ActionTypes.LOADING })
        getPucData(queryParams)
            .then((data) => {
                dispatch({ type: ActionTypes.REFETCH_SUCCESS, payload: data })
            })
    }, 300)

    const onSearchHandler = debounce((search: string) => {
        refresh({
            search,
            skip: -1,
        })
    }, 300)

    const onSelectHandler = (option: any) => {
        setSelectedOption(option);
        onChange && onChange(option);
        //setShowPopover(false)
    };

    const parentPucCodeLabel = (
        <Tooltip title="Ingrese un codigo de cuenta que exista">
            <Stack direction="row" alignItems="center" gap={1}>
                <InfoOutlinedIcon sx={{ width: "16px", height: "16px" }} />
                <div>Código</div>
            </Stack>
        </Tooltip>)

    return (
        <Stack>
            <Stack direction={"row"} >
                <Box sx={{ position: "relative" }}>
                    <TextField
                        ref={anchorEl}
                        label={parentPucCodeLabel}
                        placeholder="Ingrese el código de la cuenta"
                        onChange={(e) => onSearchHandler(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={{
                            minWidth: "50px",
                            "& fieldset": {
                                borderBottomRightRadius: 0,
                                borderTopRightRadius: 0,
                                borderRight: "none",
                            },
                            "&.Mui-focused fieldset": {
                                borderWidth: "1px !important",
                            },
                        }}
                    />
                    <Popover
                        open={state.showSuggestions}
                        anchorEl={anchorEl.current}
                        onClose={() => dispatch({ type: ActionTypes.RESET })}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                    >
                        <Stack sx={{ p: 2, maxHeight: "40vh" }} spacing={1}>
                            {state.isLoading ? (
                                <CircularProgress size={24} />
                            ) : (
                                <MenuList
                                    dense
                                    sx={{ minWidth: "330px", maxWidth: "50vw", overflowY: "auto" }}
                                >
                                    {state.options.map((option) => (
                                        <MenuItem
                                            key={option.id}
                                            onClick={() => {
                                                anchorEl!.current!.value = `${option?.code} - ${option?.description}`
                                                dispatch({ type: ActionTypes.SELECT_OPTION, payload: option })
                                            }}
                                        >
                                            <ListItemText>
                                                {option?.code} - {option?.description}
                                            </ListItemText>
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            )}
                        </Stack>
                    </Popover>
                </Box>
                <Divider orientation="vertical" flexItem />
                <TextField
                    onChange={(e) => setSubCode(e.target.value)}
                    label="Subcuenta"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={{
                        minWidth: "50px",
                        "& fieldset": {
                            borderLeft: "none",
                            borderBottomLeftRadius: 0,
                            borderTopLeftRadius: 0,
                        }
                    }}
                />
            </Stack>
            {
                !state.value && <FormHelperText error={!state.value}>
                    Seleccione una cuenta principal
                </FormHelperText>
            }
        </Stack>
    )
}
