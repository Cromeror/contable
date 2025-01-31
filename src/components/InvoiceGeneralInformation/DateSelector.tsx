import { useReducer, useState } from "react";
import { Edit as EditIcon } from "@mui/icons-material"
import { IconButton, Stack, Typography } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers"

const initialState = {
    date: new Date(),
    open: false,
}

type State = {
    date: Date,
    open: boolean
}

enum ActionTypes {
    SET_DATE = "SET_DATE",
    OPEN_DATE_PICKER = "OPEN_DATE_PICKER"
}

type Actions = {
    type: ActionTypes,
    payload?: any
}

type Props = {
    defaultValue?: Date,
    onChange?: (value: Date) => void
}

const reducer = (state: State, action: Actions): State => {
    switch (action.type) {
        case ActionTypes.SET_DATE:
            return {
                ...state,
                open: false,
                date: action.payload,
            }
        case ActionTypes.OPEN_DATE_PICKER:
            return {
                ...state,
                open: true,
                date: action.payload,
            }
        default:
            console.warn("Unhandled action type:", action.type);
            return state;
    }
}

export const DateSelector = ({ }: Props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setEditMode = (date: Date) => {
        dispatch({ type: ActionTypes.OPEN_DATE_PICKER, payload: date })
    }

    return (
        <>
            {state.open
                ? <DatePicker label="Basic date picker"
                    open={true}
                    onClose={() => {
                        console.log("closeOnSelect")
                    }}
                />
                : <Stack direction={"row"} alignItems={"start"} spacing={2} onClick={() => setEditMode(new Date())}>
                    <Stack>
                        <Typography sx={{ fontSize: 12 }}>
                            Pagar hasta
                        </Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: 14, textTransform: 'capitalize' }}>
                            Mar 15, 2023
                        </Typography>
                    </Stack>
                    <IconButton>
                        <EditIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                </Stack>}


        </>
    )
}