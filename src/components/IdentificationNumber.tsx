import { FormHelperText, Stack, TextField } from "@mui/material";
import { useEffect, useRef } from "react";
import { DocumentTypesValues } from "./DocumentTypeSelector";

export type IdentificationValue = {
  value: string;
  dv?: string;
};

type Props = {
  documentType?: DocumentTypesValues;
  error?: any;
  value?: IdentificationValue;
  onChange?: (e: any) => void;
  name?: string;
  label?: string;
  fullWidth?: boolean;
};

export const IdentificationNumber = ({
  error,
  value,
  documentType,
  onChange,
  fullWidth,
  ...otherProps
}: Props) => {
  const identificationValue = useRef(value?.value);
  const dv = useRef(value?.dv || "");

  useEffect(() => {
    if (
      documentType === DocumentTypesValues.NIT_OTHER_COUNTRY &&
      dv.current !== "0"
    ) {
      dv.current = "0";
      onChange?.({
        value: identificationValue.current,
        dv: dv.current,
      });
    }
  }, [documentType, onChange]);

  const dvIsAvailable =
    documentType === DocumentTypesValues.NIT_OTHER_COUNTRY ||
    documentType === DocumentTypesValues.NIT;

  return (
    <Stack direction="row" spacing={1}>
      <Stack flexGrow={fullWidth ? 1 : 0}>
        <TextField
          InputLabelProps={{ shrink: true }}
          error={!!error}
          value={identificationValue.current}
          fullWidth={fullWidth}
          onChange={(e) => {
            identificationValue.current = e.target.value;
            onChange?.({
              value: e.target.value,
              dv: dv.current,
            });
          }}
          {...otherProps}
        />
        <FormHelperText error={!!error}>{error}</FormHelperText>
      </Stack>
      {dvIsAvailable && (
        <Stack>
          <TextField
            InputLabelProps={{ shrink: true }}
            value={dv.current}
            onChange={(e) => {
              dv.current = e.target.value;
              onChange?.({
                value: identificationValue.current,
                dv: e.target.value,
              });
            }}
          />
        </Stack>
      )}
    </Stack>
  );
};
