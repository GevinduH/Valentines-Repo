import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { useRecoilState } from "recoil";
import { snackbarState } from "./recoilValues";
import Alert from "@material-ui/lab/Alert";

export default function SuccessSnackbar() {
  const [open, setOpen] = useRecoilState(snackbarState);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={4500} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success">
        She said YES! 💕 Mission successful!
      </Alert>
    </Snackbar>
  );
}
