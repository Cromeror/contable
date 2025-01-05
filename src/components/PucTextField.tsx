import React, { useEffect, useReducer, useRef, useState } from "react";
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
import { getPucData, QueryPucParams } from "@/utils/pucUtils";
import { debounce } from "lodash";
import { PucAccount } from "@/app/api/puc/definitions";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

type Props = {
  onChange?: (value: any) => void;
  getFieldProps?: any;
};

enum ActionTypes {
  REFETCH_SUCCESS = "REFETCH_SUCCESS",
  LOADING = "LOADING",
  RESET = "RESET",
  SELECT_OPTION = "SELECT_OPTION",
  SHOW_SUGGESTIONS = "SHOW_SUGGESTIONS",
  ENABLE_FOCUS = "ENABLE_FOCUS",
}

type Actions = {
  type: ActionTypes;
  payload?: any;
};

type State = {
  options: PucAccount[];
  isLoading: boolean;
  showSuggestions: boolean;
  value?: PucAccount;
  focusEnabled: boolean;
};

const initialState = {
  options: [],
  isLoading: false,
  showSuggestions: false,
  focusEnabled: true,
};

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case ActionTypes.LOADING:
      return {
        ...state,
        isLoading: true,
        showSuggestions: true,
        focusEnabled: false,
      };
    case ActionTypes.REFETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        showSuggestions: true,
        focusEnabled: false,
        options: action.payload,
      };
    case ActionTypes.SELECT_OPTION:
      return {
        ...state,
        showSuggestions: false,
        value: action.payload,
        focusEnabled: false,
      };
    case ActionTypes.SHOW_SUGGESTIONS:
      return {
        ...state,
        showSuggestions: state.focusEnabled,
        isLoading: state.focusEnabled,
      };
    case ActionTypes.RESET:
      return {
        ...state,
        showSuggestions: false,
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

export const PucTextField = ({ onChange, getFieldProps }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [subCode, setSubCode] = useState("");
  const anchorEl = useRef<HTMLDivElement>(null);

  const refresh = async (queryParams: QueryPucParams) => {
    try {
      const data = await getPucData(queryParams);
      dispatch({ type: ActionTypes.REFETCH_SUCCESS, payload: data });
    } catch (error) {
      console.error("Error fetching PUC data:", error);
      dispatch({ type: ActionTypes.RESET });
    }
  };

  const debouncedRefresh = debounce(refresh, 300);

  const handleFocus = () => {
    dispatch({ type: ActionTypes.SHOW_SUGGESTIONS });
    if (state.focusEnabled) {
      debouncedRefresh({
        search: "",
        skip: 0,
      });
    }
  };

  const handleBlur = () => {
    dispatch({ type: ActionTypes.ENABLE_FOCUS });
  };

  const handleSearch = (search: string) => {
    dispatch({ type: ActionTypes.LOADING });
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
            onBlur={handleBlur}
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
            onClose={() => dispatch({ type: ActionTypes.RESET })}
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
              {state.isLoading ? (
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
