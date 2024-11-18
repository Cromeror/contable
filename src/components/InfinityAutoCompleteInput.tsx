import { getPucData } from "@/utils/pucUtils";
import {
  CircularProgress,
  ListItemText,
  MenuItem,
  MenuList,
  Popover,
  Stack,
  SxProps,
  TextField,
  Theme,
} from "@mui/material";
import { debounce } from "lodash";
import React, { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  labelFormat: (value: any) => string;
  sx?: SxProps<Theme>;
  label?: string;
  onChange?: (value: any) => void;
  name?: string;
  defaultValue?: any;
  filterData?: boolean;
};

const TAKE = 5;

export const InfinityAutoCompleteInput = ({
  sx,
  label,
  onChange,
  defaultValue,
  filterData,
  labelFormat
}: Props) => {
  const anchorEl = useRef<HTMLInputElement>(null);
  const [showPopover, setShowPopover] = useState(false);
  const [selectedOption, setSelectedOption] = React.useState<any>(defaultValue);
  const [page, setPage] = React.useState(0);
  const [search, setSearch] = useState<string | undefined>();
  const [options, setOptions] = useState<{
    isLoading: boolean;
    data: any[];
  }>({
    isLoading: false,
    data: [],
  });

  useEffect(() => {
    setOptions({ isLoading: true, data: [] });
    getPucData({ take: TAKE, skip: page, filterByLength: filterData, search }).then(
      (data) => {
        setOptions({ data, isLoading: false });
      }
    );
  }, [filterData, page, search]);

  const onSearchHandler = useCallback(
    debounce(async ({ search }: { search: string }) => {
      if (!search) return;

      setPage(-1); // En la api, si se pasa skip=-1, se devuelven todos los datos se debe ignorar el take
      setSearch(search);
    }, 300),
    []
  );

  const resetFilters = () => {
    setSearch(undefined);
    setPage(0);
  };

  const onSelectHandler = (option: any) => {
    setSelectedOption(option);
    onChange && onChange(option);
    onClosePopover();
  };

  const onClosePopover = () => {
    resetFilters();
    setShowPopover(false);
  };

  return (
    <>
      <TextField
        label={label}
        ref={anchorEl}
        value={
          selectedOption
            ? labelFormat && labelFormat(selectedOption)
            : ""
        }
        onClick={() => setShowPopover(true)}
        InputLabelProps={{ shrink: !!selectedOption }}
        fullWidth
      />
      <Popover
        open={showPopover}
        anchorEl={anchorEl.current}
        onClose={onClosePopover}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Stack sx={{ p: 2, maxHeight: "40vh" }} spacing={1}>
          <TextField
            label={label}
            sx={{ width: "100%" }}
            inputProps={{
              autoComplete: "off",
            }}
            onChange={(e) => {
              const searchValue = e.target.value;

              if (searchValue.length > 3)
                onSearchHandler({ search: searchValue });
            }}
          />
          {options.isLoading ? (
            <CircularProgress />
          ) : (
            <MenuList
              dense
              sx={{ minWidth: "330px", maxWidth: "50vw", overflowY: "auto" }}
            >
              {options.data.map((option) => (
                <MenuItem
                  key={option.id}
                  onClick={() => onSelectHandler(option)}
                >
                  <ListItemText>
                    {labelFormat && labelFormat(option)}
                  </ListItemText>
                </MenuItem>
              ))}
            </MenuList>
          )}
        </Stack>
      </Popover>
    </>
  );
};
