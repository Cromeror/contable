import React, { useReducer, useRef } from "react";
import {
  Box,
  CircularProgress,
  Divider,
  ListItemText,
  MenuItem,
  MenuList,
  Stack,
  TextField,
  Tooltip,
  ClickAwayListener,
  Card
} from "@mui/material";
import { QueryPucParams } from "@/utils/pucUtils";
import { debounce } from "lodash";
import { PucAccount } from "@/app/api/puc/definitions";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useGetPuc } from "@/queries/pucQueries";

const allowedKeys = [
  "Backspace",
  "Delete",
  "Tab",
  "Escape",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  "Home",
  "End",
  "PageUp",
  "PageDown",
  "Enter",
  "Control",
  "Alt",
  "Shift"
];

type Props = {
  onChange?: (parent?: PucAccount, subAccount?: string) => void;
  defaultValue?: PucAccount;
  error?: boolean;
};

enum ActionTypes {
  LOAD_OPTIONS = "LOAD_OPTIONS",
  SELECT_OPTION = "SELECT_OPTION",
  SET_SUBACCOUNT = "SET_SUBACCOUNT",
}

type Actions = {
  type: ActionTypes;
  payload?: any;
};

type State = {
  options: PucAccount[];
  showSuggestions: boolean;
  parent?: PucAccount;
  subAccount?: string;
};

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case ActionTypes.LOAD_OPTIONS:
      return {
        ...state,
        showSuggestions: action.payload.showSuggestions,
        options: action.payload.options,
      };
    case ActionTypes.SELECT_OPTION:
      return {
        ...state,
        showSuggestions: false,
        parent: action.payload,
      };
    case ActionTypes.SET_SUBACCOUNT:
      return {
        ...state,
        subAccount: action.payload,
      };
    default:
      console.warn("Unhandled action type:", action.type);
      return state;
  }
};

const pucDataFilter = (data: PucAccount[], search: string = "", minLength: number = 4): PucAccount[] => {
  if (search) return data.filter((item: PucAccount) => `${item.code}`.length >= minLength && (item.description + item.code).toLowerCase().includes(search.toLowerCase()))

  return data.filter((item: PucAccount) => `${item.code}`.length >= minLength)
}

export const PucTextField = ({ onChange, error, defaultValue }: Props) => {
  const { data: pucDataList = [], isLoading } = useGetPuc({ skip: -1 })
  const [state, dispatch] = useReducer(
    reducer,
    { options: [], showSuggestions: false, parent: defaultValue }
  );
  const anchorEl = useRef<HTMLDivElement>(null);

  const resetFilters = () => {
    dispatch({ type: ActionTypes.LOAD_OPTIONS, payload: { showSuggestions: false, options: pucDataFilter(pucDataList) } });
  }

  const refresh = async (queryParams: QueryPucParams) => {
    dispatch({
      type: ActionTypes.LOAD_OPTIONS,
      payload: {
        showSuggestions: true,
        options: pucDataFilter(pucDataList, queryParams.search)
      }
    });
  };

  const debouncedRefresh = debounce(refresh, 300);

  const handleFocus = () => {
    if (state.showSuggestions) return;
    dispatch({ type: ActionTypes.LOAD_OPTIONS, payload: { showSuggestions: true, options: pucDataFilter(pucDataList) } });
  };

  const changeInputParent = (search: string) => {
    debouncedRefresh({
      search,
      skip: 0,
    });
  };

  const handleSelect = (option: PucAccount) => {
    if (anchorEl.current) {
      const input = anchorEl.current.querySelector("input");
      if (input) {
        input.value = `${option?.code}`;
      }
    }

    dispatch({ type: ActionTypes.SELECT_OPTION, payload: option });
    onChange?.(option, state.subAccount);
  };

  const changeSubCode = (value: string) => {
    dispatch({ type: ActionTypes.SET_SUBACCOUNT, payload: value });
    onChange?.(state.parent, value);
  }

  const parentPucCodeLabel = (
    <Tooltip title="Ingrese un codigo de cuenta o parte de un código que exista y seleccione la opción correspondiente">
      <Stack direction="row" alignItems="center" gap={1}>
        <InfoOutlinedIcon sx={{ width: "16px", height: "16px" }} />
        <div>Código</div>
      </Stack>
    </Tooltip>
  );

  const clickAwayHandler = () => {
    if (state.parent && anchorEl.current) {
      const input = anchorEl.current.querySelector("input");
      if (input) {
        input.value = `${state.parent?.code || ""}`;
      }
    }
    resetFilters()
  }

  return (
    <ClickAwayListener
      onClickAway={clickAwayHandler}>
      <Stack sx={{ position: "relative" }}>
        <Stack direction={"row"} ref={anchorEl}>
          <TextField
            error={error}
            label={parentPucCodeLabel}
            placeholder="Cuenta"
            onChange={(e) => changeInputParent(e.target.value)}
            onFocus={handleFocus}
            InputLabelProps={{ shrink: true }}
            inputProps={{
              autoComplete: "off",
              "data-lpignore": true,
              form: { autoComplete: "off" },
            }}
            sx={{
              width: "120px",
              "& input": {
                textAlign: "right",
              },
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
          <Divider orientation="vertical" flexItem />
          <TextField
            error={error}
            onChange={(e) => changeSubCode(e.target.value)}
            onKeyDown={(e) => {
              if (allowedKeys.includes(e.key)) return;

              const numberRegex = /^[0-9]$/;
              if (!numberRegex.test(e.key)) e.preventDefault();
            }}
            onFocus={resetFilters}
            label="Subcuenta"
            InputLabelProps={{ shrink: true }}
            inputProps={{
              maxLength: 2,
              inputMode: "numeric",
              pattern: "[0-9]*",
              autoComplete: "off",
              form: { autoComplete: "off" },
            }}
            sx={{
              width: "90px",
              "& fieldset": {
                borderBottomLeftRadius: 0,
                borderTopLeftRadius: 0,
                borderLeft: "none",
              },
            }}
          />
        </Stack>
        <Card
          elevation={2}
          sx={{
            position: "absolute",
            top: anchorEl.current?.offsetHeight,
            left: 0,
            zIndex: 10,
            display: state.showSuggestions ? "block" : "none"
          }}
        >
          <Stack
            sx={{ maxHeight: "40vh", minWidth: "330px" }}
            spacing={1}
          >
            {isLoading ? (
              <Box display="flex" justifyContent="center" p={2}>
                <CircularProgress size={24} />
              </Box>
            ) : (
              <MenuList
                dense
                sx={{
                  width: "100%",
                  maxWidth: "50vw",
                  overflowY: "auto",
                }}
              >
                {state.options.length > 0 ? (
                  state.options.map((option) => (
                    <MenuItem
                      key={option.id}
                      onClick={() => handleSelect(option)}
                    >
                      <ListItemText>
                        {option?.code} - {option?.description}
                      </ListItemText>
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem disabled>
                    <ListItemText>No se encontraron resultados</ListItemText>
                  </MenuItem>
                )}
              </MenuList>
            )}
          </Stack>
        </Card>
      </Stack>
    </ClickAwayListener>
  );
};
