import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { InfinityAutoCompleteInput } from "./InfinityAutoCompleteInput";
import { useCreatePucMutation } from "@/queries/pucQueries";
import React, { useEffect, useState } from "react";

enum AccountType {
  Clase = "class",
  Grupo = "group",
  Cuenta = "account",
  Subcuenta = "subaccount",
}

const initialValues = {
  accountType: "",
  account: "",
  concept: "",
  parentId: "",
};
const PucSchema = Yup.object().shape({
  accountType: Yup.string().required("Selecciona el tipo de cuenta"),
  account: Yup.string().when("accountType", (accountType: any, schema) => {
    if (accountType === "clase") {
      return schema
        .matches(/^\d$/, "Clase debe ser un solo dígito")
        .required("El número de clase es requerido");
    } else if (accountType === "grupo") {
      return schema.matches(/^\d$/, "Grupo debe ser un solo dígito");
    } else if (accountType === "cuenta") {
      return schema.matches(/^\d{2}$/, "Cuenta debe ser de 2 dígitos");
    } else if (accountType === "subcuenta") {
      return schema.matches(/^\d{2}$/, "SubCuenta debe ser de 2 dígitos");
    }
    return schema.required("El número de cuenta es requerido");
  }),
});
type Props = {
  controls?: any;
  defaultValue?: any;
};

export const AccountingForm = ({ controls, defaultValue }: Props) => {
  const [accountType, setAccountType] = useState("");
  const { mutate } = useCreatePucMutation();

  const formik = useFormik({
    initialValues: defaultValue || initialValues,
    validationSchema: PucSchema,
    onSubmit: (values, { setSubmitting }) => {
      mutate({
        code: values.account,
        description: values.concept,
        parentId: defaultValue?.id,
        tag: values.accountType,
      } as any);
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    },
  });
  const {
    setFieldValue,
    getFieldProps,
    errors,
    touched,
    handleSubmit,
    isValid,
    isSubmitting,
    values,
  } = formik;
  useEffect(() => {
    setFieldValue("account", "");
    setFieldValue("parentId", "");
  }, [values.accountType, setFieldValue]);

  const handleAccountTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFieldValue("accountType", event.target.value as AccountType);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 min-w-[400px]">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <InfinityAutoCompleteInput
          label="Codigo principal"
          {...getFieldProps("parentId")}
          value={values?.parentId}
          onChange={(value) => setFieldValue("parentId", value)}
        />
        <TextField
          label="Subcuenta"
          error={!!(errors.account && touched.account && errors.account)}
          {...getFieldProps("account")}
        />
      </Stack>
      <FormHelperText
        error={!!(errors.account && touched.account && errors.account)}
      >
        <> {touched.account && errors.account}</>
      </FormHelperText>
      <TextField
        label="Concepto"
        error={!!(errors.concept && touched.concept && errors.concept)}
        multiline
        rows={3}
        {...getFieldProps("concept")}
      />
      <FormHelperText
        error={!!(errors.concept && touched.concept && errors.concept)}
      >
        <>{touched.concept && errors.concept}</>
      </FormHelperText>
      <Stack direction="row" justifyContent="flex-end" spacing={2}>
        {controls}
        <Button
          type="submit"
          variant="contained"
          disabled={!isValid || isSubmitting}
        >
          Guardar
        </Button>
      </Stack>
    </form>
  );
};
