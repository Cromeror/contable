import { Edit as EditIcon } from "@mui/icons-material"
import { Autocomplete, ClickAwayListener, IconButton, Stack, TextField, Typography } from "@mui/material"
import { useReducer } from "react"

type State = {
    editMode: boolean
}

const initialState: State = {
    editMode: false,
}

enum ActionTypes {
    EDIT_MODE = "EDIT_MODE"
}

type Actions = {
    type: ActionTypes,
    payload?: any
}

type Props = {
    defaultValue?: any,
    onChange?: (value: any) => void
}

const reducer = (state: State, action: Actions): State => {
    console.log(action)
    switch (action.type) {
        case ActionTypes.EDIT_MODE:
            return {
                ...state,
                editMode: action.payload,
            }
        default:
            console.warn("Unhandled action type:", action.type);
            return state;
    }
}

export const SupplieSelector = ({ }: Props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    console.log(state)
    return (
        <>
            {
                state.editMode
                    ?
                    <ClickAwayListener onClickAway={() => {
                        console.log("closeOnSelect")
                        dispatch({ type: ActionTypes.EDIT_MODE, payload: false })
                    }}>
                        <Autocomplete
                            disablePortal
                            options={[]}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Movie" />}
                        />
                    </ClickAwayListener>
                    : <Stack
                        direction={"row"}
                        alignItems={"start"}
                        spacing={2}
                        onClick={() => dispatch({ type: ActionTypes.EDIT_MODE, payload: true })}>
                        <Stack sx={{ width: '100%' }}>
                            <Typography sx={{ fontSize: 12 }}>
                                Proveedor
                            </Typography>
                            <Typography sx={{ fontWeight: 600, textTransform: 'capitalize' }}>
                                Cristobal Romero
                            </Typography>
                            <Typography sx={{ fontSize: 12 }}>
                                cristobal.romero@gmail.com
                            </Typography>
                        </Stack>
                        <IconButton>
                            <EditIcon sx={{ fontSize: 18 }} />
                        </IconButton>
                    </Stack>
            }
        </>
    )
}
