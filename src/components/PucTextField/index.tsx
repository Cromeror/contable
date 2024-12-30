import React, { use, useEffect, useReducer, useRef, useState } from "react";
import {
  Box,
  CircularProgress,
  Divider,
  FormHelperText,
  ListItemText,
  MenuItem,
  MenuList,
  Popover,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import { QueryPucParams } from "@/utils/pucUtils";
import { debounce } from "lodash";
import { PucAccount } from "@/app/api/puc/definitions";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useGetPuc } from "@/queries/pucQueries";

type Props = {
  onChange?: (value: any) => void;
  getFieldProps?: any;
};

enum ActionTypes {
  LOAD_OPTIONS = "LOAD_OPTIONS",
  SELECT_OPTION = "SELECT_OPTION",
  ENABLE_FOCUS = "ENABLE_FOCUS",
}

type Actions = {
  type: ActionTypes;
  payload?: any;
};

type State = {
  options: PucAccount[];
  showSuggestions: boolean;
  value?: PucAccount;
  focusEnabled: boolean;
};

const initialState = {
  options: [],
  showSuggestions: false,
  focusEnabled: true,
};

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case ActionTypes.LOAD_OPTIONS:
      return {
        ...state,
        showSuggestions: action.payload.showSuggestions,
        focusEnabled: false,
        options: action.payload.options,
      };
    case ActionTypes.SELECT_OPTION:
      return {
        ...state,
        showSuggestions: false,
        value: action.payload,
        focusEnabled: false,
      };
    case ActionTypes.ENABLE_FOCUS:
      return {
        ...state,
        focusEnabled: true,
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

export const PucTextField = ({ onChange, getFieldProps }: Props) => {
  const { data: pucDataList = [], isLoading, error } = useGetPuc({ skip: -1 })
  const [state, dispatch] = useReducer(reducer, initialState);
  const [subCode, setSubCode] = useState("");
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
    //dispatch({ type: ActionTypes.LOAD_OPTIONS, payload: { showSuggestions: true, options: pucDataFilter(pucDataList) } });
  };

  const handleSearch = (search: string) => {
    debouncedRefresh({
      search,
      skip: 0,
    });
  };

  const handleSelect = (option: PucAccount) => {
    if (anchorEl.current) {
      const input = anchorEl.current.querySelector("input");
      if (input) {
        input.value = `${option?.code} - ${option?.description}`;
      }
    }
    dispatch({
      type: ActionTypes.SELECT_OPTION,
      payload: option,
    });
    onChange?.(option);
  };

  const parentPucCodeLabel = (
    <Tooltip title="Ingrese un codigo de cuenta que exista">
      <Stack direction="row" alignItems="center" gap={1}>
        <InfoOutlinedIcon sx={{ width: "16px", height: "16px" }} />
        <div>Código</div>
      </Stack>
    </Tooltip>
  );

  return (
    <Stack>
      <Stack direction={"row"}>
        <Box sx={{ position: "relative" }} ref={anchorEl}>
          <TextField
            label={parentPucCodeLabel}
            placeholder="Cuenta"
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={handleFocus}
            onBlur={() => resetFilters()}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              autoComplete: "off",
              "data-lpignore": true,
              form: {
                autoComplete: "off",
              },
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
            onClose={() => resetFilters()}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <Stack
              sx={{ p: 2, maxHeight: "40vh", minWidth: "330px" }}
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
          </Popover>
        </Box>
        <Divider orientation="vertical" flexItem />
        <TextField
          onChange={(e) => {
            setSubCode(e.target.value);
          }}
          {...getFieldProps("account")}
          label="Subcuenta"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            maxLength: 2,
            inputMode: "numeric",
            pattern: "[0-9]*",
            autoComplete: "off",
            "data-lpignore": true,
            form: {
              autoComplete: "off",
            },
          }}
          sx={{
            minWidth: "50px",
            "& fieldset": {
              borderBottomLeftRadius: 0,
              borderTopLeftRadius: 0,
              borderLeft: "none",
            },
          }}
        />
      </Stack>
      {!state.value && (
        <FormHelperText error={!state.value}>
          Seleccione una cuenta principal
        </FormHelperText>
      )}
    </Stack>
  );
};
