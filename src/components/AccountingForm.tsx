import React, { useRef } from "react";
import {
  Button,
  FormHelperText,
  Stack,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useCreatePucMutation } from "@/queries/pucQueries";
import { PucTextField } from "./PucTextField";
import { PucAccount } from "@/app/api/puc/definitions";

const initialValues = {
  accountType: "",
  subCode: "",
  description: "",
  parentId: "",
};

type Schema = {
  subCode: number;
  description: string;
  parentId: number;
}

const PucSchema = Yup.object().shape({
  parentId: Yup.string().required("Seleccione la cuenta"),
  description: Yup.string().required("La descripción es requerida"),
  subCode: Yup.string()
    .matches(/^[0-9]{2}$/, "Ingrese un número de 2 dígitos")
    .required("El número de la subcuenta es requerido"),
});

type Props = {
  controls?: any;
  defaultValue?: any;
  onSuccess?: (response: any) => void;
};

export const AccountingForm = ({ controls, defaultValue, onSuccess }: Props) => {
  const { mutateAsync } = useCreatePucMutation();
  const parentOptionSelected = useRef<PucAccount>();

  const formik = useFormik<Schema>({
    initialValues: defaultValue || initialValues,
    validationSchema: PucSchema,
    onSubmit: (values: Schema, { setSubmitting }) => {
      if (!parentOptionSelected.current?.code) {
        console.error("Error en la selección de la cuenta");
        return;
      }

      mutateAsync({
        code: parentOptionSelected.current?.code + values.subCode,
        description: values.description,
        parentId: Number(values.parentId),
        tag: "subaccount"
      }).then(() => {
        onSuccess?.(values);
      });
    },
  });

  const {
    setFieldValue,
    getFieldProps,
    errors,
    handleSubmit,
    isValid,
    isSubmitting,
  } = formik;

  const onChangePuc = (parent?: PucAccount, subAccount?: string) => {
    parentOptionSelected.current = parent;
    setFieldValue("parentId", parent?.id);
    setFieldValue("subCode", subAccount);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 min-w-[400px]">
      <PucTextField onChange={onChangePuc} error={!!(errors.parentId || errors.subCode)} />
      <FormHelperText error={!!(errors.parentId || errors.subCode)}>
        <>{`${errors.parentId || ""}${errors.parentId && errors.subCode ? `; ` : ""}${errors.subCode || ""}`}</>
      </FormHelperText>
      <TextField
        label="Descripción"
        error={!!(errors.description)}
        multiline
        rows={3}
        {...getFieldProps("description")}
      />
      <FormHelperText error={!!(errors.description)}      >
        <>{`${errors?.description || ""}`}</>
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
