import { Button } from "@mui/material";

export default function CommonButtons(props) {
  const { children } = props;
  return (
    <Button variant="contained" color="primary" {...props}>
      {children}
    </Button>
  );
}
