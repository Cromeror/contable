import {
  Button,
  CircularProgress,
  Divider,
  FormControl,
  FormHelperText,
  InputLabel,
  Stack,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { InfinityAutoCompleteInput } from "./InfinityAutoCompleteInput";
import { useCreateProduct } from "@/queries/productsQueries";
import { PucAccount } from "@/app/api/puc/definitions";

const ValidationSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es requerido"),
  pucAccount: Yup.object().required("Debe seleccionar una cuenta principal"),
  unitPrice: Yup.number().required("El precio unitario es requerido"),
  subcuenta: Yup.number()
    .typeError("Debe ser un número")
    .required("La subcuenta es requerida")
    .test("len", "La subcuenta debe tener máximo 2 dígitos", (val) => {
      return !val || val.toString().length <= 2;
    }),
  description: Yup.string(),
});

type FormValues = {
  name: string;
  description: string;
  subcuenta: string;
  pucAccount: PucAccount;
  unitPrice: number;
};

const initialValues = {
  name: "",
  description: "",
  subcuenta: "",
  unitPrice: "",
};

type Props = {
  controls?: any;
  defaultValue?: FormValues;
  onSuccess?: (response: any) => void;
  onError?: (error: any) => void;
};

export const ProductForm = ({
  controls,
  defaultValue,
  onSuccess = () => {},
  onError,
}: Props) => {
  const { mutateAsync, isPending } = useCreateProduct();

  const {
    handleSubmit,
    errors,
    touched,
    isValid,
    isSubmitting,
    values,
    setFieldValue,
    getFieldProps,
  } = useFormik({
    initialValues: { ...initialValues, ...defaultValue },
    validationSchema: ValidationSchema,
    onSubmit: async (values) => {
      try {
        onSuccess(
          await mutateAsync({
            name: values.name,
            description: values.description,
            pucId: values.pucAccount?.id!,
            unitPrice: values.unitPrice as number,
          })
        );
      } catch (error) {
        onError && onError(error);
      }
    },
  });

  return (
    <Stack spacing={1} sx={{ backgroundColor: "#fff", borderRadius: 2 }}>
      <TextField
        label="Nombre del producto/servicio"
        error={!!(errors.name && touched.name)}
        {...getFieldProps("name")}
      />
      <FormHelperText error={!!(touched.name && errors.name)}>
        {errors.name && touched.name && errors.name}
      </FormHelperText>

      <Stack direction={"row"} spacing={2}>
        <InfinityAutoCompleteInput
          labelFormat={(value: PucAccount) =>
            `${value.code} - ${value.description}`
          }
          filterData={false}
          label={
            values.pucAccount ? "Codigo principal" : "Selecciona una cuenta"
          }
          onChange={(value) => {
            setFieldValue("pucAccount", value);
          }}
        />
        {/* <TextField
          label="Subcuenta"
          onChange={() => {
            console.log("Ingreso cuenta secundaria");
          }}
        /> */}
        <FormHelperText error={!!(touched.subcuenta && errors.subcuenta)}>
          {errors.subcuenta && touched.subcuenta && errors.subcuenta}
        </FormHelperText>
      </Stack>
      <FormHelperText error={!!errors.pucAccount}>
        {errors.pucAccount}
      </FormHelperText>
      <TextField
        label="Descripción"
        multiline
        rows={2}
        {...getFieldProps("description")}
      />
      <FormHelperText error={!!(touched.name && errors.name)}></FormHelperText>
      <TextField
        label="Precio unitario"
        error={!!(errors.name && touched.name)}
        {...getFieldProps("unitPrice")}
        sx={{ width: "30%" }}
      />
      <FormHelperText error={!!(touched.unitPrice && errors.unitPrice)}>
        {errors.unitPrice && touched.unitPrice && errors.unitPrice}
      </FormHelperText>

      <Divider />
      <Stack direction={"row"} spacing={2} justifyContent={"flex-end"}>
        {controls}
        <Button
          type="submit"
          variant="contained"
          disabled={!isValid || isSubmitting}
          onClick={() => handleSubmit()}
        >
          {isPending && <CircularProgress size={16} sx={{ mr: 1 }} />} Guardar
        </Button>
      </Stack>
    </Stack>
  );
};
