import { Box, TextField } from "@mui/material";

export const CommonTextField = (props) => {
  return (
    <TextField
      {...props}
      margin="normal"
      component="form"
      noValidate
      autoComplete="off"
      required
      fullWidth
      id={props.id || "id"}
      name={props.name || "name"}
      value={props.value}
      error={props.error ? true : false}
      label={props.label || "label"}
      helperText={props.helperText}
      focused
      size="small"
    />
  );
};
