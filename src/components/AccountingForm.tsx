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
import { PucTextField } from "./PucTextField";

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
  parentId: Yup.string().required("Seleccione la cuenta"),
  concept: Yup.string().required("El concepto es requerido"),
  account: Yup.string()
    .matches(/^[0-9]{1,2}$/, "Solo números, máximo 2 dígitos")
    .required("El número de la subcuenta es requerido"),
});
type Props = {
  controls?: any;
  defaultValue?: any;
};

export const AccountingForm = ({ controls, defaultValue }: Props) => {
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

  const handlePucChange = (value: any) => {
    setFieldValue("selectedPuc", value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 min-w-[400px]">
      <PucTextField onChange={handlePucChange} getFieldProps={getFieldProps} />

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
