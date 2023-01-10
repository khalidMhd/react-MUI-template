import React from "react";
import {
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  Slide,
  DialogActions,
  DialogContentText,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function TransitionDialog(props) {
  const { isOpen, handleClose, handleConfirm, children, heading, headerColor } =
    props;

  return (
    <>
      <Dialog
        style={{ borderRadius: 1 }}
        open={isOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <Typography>
          <DialogTitle
            id="alert-dialog-slide-title"
            style={{ color: headerColor ? headerColor : "inherit" }}
          >
            {heading}
          </DialogTitle>
        </Typography>
        <DialogContent style={{ fontSize: 16 }}>
          {/* <DialogContentText id="alert-dialog-slide-description">{children}</DialogContentText> */}
          {children}
        </DialogContent>
        <DialogActions style={{ marginRight: 10, marginBottom: 5 }}>
          <Button onClick={handleClose} variant="contained">
            Cancel
          </Button>
          <Button onClick={handleConfirm} variant="contained" color="secondary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

// use

{
  /* <TransitionDialog
        isOpen={true}
        handleClose={handleCloseDeleteDialog}
        heading={"Confirmation"}
        handleConfirm={handleDeleteDialog}
      >
        Are you sure you want to delete this record?
      </TransitionDialog> */
}
