import { MenuItem, Select, SelectProps } from "@mui/material";

export enum DocumentTypesValues {
  CIVIL_REGISTRATION = "CIVIL_REGISTRATION",
  CC = "CC",
  PASSPORT = "PASSPORT",
  NIT = "NIT",
  NIT_OTHER_COUNTRY = "NIT_OTHER_COUNTRY",
}

export type DocumentTypeOption = {
  value: DocumentTypesValues;
  label: string;
  dv?: number;
};

export const DocumentTypeOptions: DocumentTypeOption[] = [
  {
    value: DocumentTypesValues.CIVIL_REGISTRATION,
    label: "Registro civil",
  },
  {
    value: DocumentTypesValues.CC,
    label: "Cédula de ciudadanía",
  },
  // { value: 3, label: "Tarjeta de identidad" },
  // { value: 4, label: "Tarjeta de extranjería" },
  // { value: 5, label: "Cédula de extranjería" },
  {
    value: DocumentTypesValues.PASSPORT,
    label: "Pasaporte",
  },
  {
    value: DocumentTypesValues.NIT_OTHER_COUNTRY,
    label: "NIT de otro país",
    dv: 0,
  },
  {
    value: DocumentTypesValues.NIT,
    label: "NIT",
  },
].sort((a, b) => a.label.localeCompare(b.label));

type Props = {
  onChange?: (value: DocumentTypesValues) => void;
  value?: DocumentTypeOption;
  error?: any;
  name?: string;
  label?: string;
};

export const DocumentTypeSelector = ({
  value,
  error,
  onChange,
  ...otherProps
}: Props) => {
  return (
    <Select
      value={value?.value || ""}
      error={!!error}
      onChange={(e) => {
        const selectedValue = e.target.value as DocumentTypesValues;
        onChange?.(selectedValue);
      }}
      {...otherProps}
    >
      {DocumentTypeOptions.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
};
