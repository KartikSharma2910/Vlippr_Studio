import { Checkbox, FormControlLabel } from "@mui/material";
import { Controller } from "react-hook-form";
import styles from "./styles";

const Input = ({
  name,
  control,
  label,
  loading,
  rules,
  customStyles,
  ...rest
}) => {
  return (
    <Controller
      render={({ field }) => (
        <FormControlLabel
          sx={{ ...styles.wrapper, ...customStyles }}
          control={
            <Checkbox
              defaultChecked={field.value}
              onChange={field.onChange}
              inputRef={field.ref}
              checked={field.value}
            />
          }
          label={label}
        />
      )}
      name={name}
      control={control}
      rules={rules}
      {...rest}
    />
  );
};
export default Input;
