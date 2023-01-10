import React from "react";
import {
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

export default function AlertDialog(props) {
  const {
    isOpen,
    handleClose,
    message,
    primaryButtonText,
    onPrimaryButtonClick,
    heading,
    noShowCancelBtn,
    headerColor,
  } = props;
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Typography align="center">
          <DialogTitle
            id="alert-dialog-title"
            style={{ color: headerColor ? headerColor : "inherit" }}
          >
            {heading}
          </DialogTitle>
        </Typography>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {!noShowCancelBtn && (
            <Button onClick={handleClose} variant="contained">
              Cancel
            </Button>
          )}
          <Button
            onClick={() => onPrimaryButtonClick()}
            variant="contained"
            color="secondary"
          >
            {primaryButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
