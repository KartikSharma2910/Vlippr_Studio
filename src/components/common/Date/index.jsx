import {
  FormControl,
  FormHelperText,
  InputBase,
  InputLabel,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { getError } from "../../../utils";

const Date = ({
  name,
  type = "date",
  control,
  label,
  fullWidth = true,
  rules,
  customStyles,
  minDate = "",
  maxDate = "",
  variant = "standard",
  className,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, formState: { errors } }) => {
        const error = getError(name, errors);
        return (
          <FormControl
            fullWidth={fullWidth}
            variant={variant}
            className={className}
            sx={{
              ...customStyles,
              "& .MuiInputBase-input.Mui-disabled": {
                cursor: "not-allowed",
              },
              "& .MuiInputBase-input": {
                color: "white",
                padding: "4px 6px 5px 15px",
              },
              "& .MuiSvgIcon-root": {
                fill: "white", // Change the color of the SVG icon
              },
            }}
          >
            {label && <InputLabel>{label}</InputLabel>}
            <InputBase
              type={type}
              fullWidth={fullWidth}
              value={field.value}
              error={!!error}
              className={className}
              onChange={field.onChange}
              inputRef={field.ref}
              onBlur={field.onBlur}
              inputProps={{
                min: minDate,
                max: maxDate,
              }}
              {...rest}
            />
            <FormHelperText>{error?.message}</FormHelperText>
          </FormControl>
        );
      }}
      {...rest}
    />
  );
};

export default Date;
