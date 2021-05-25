import { Box, Button, CircularProgress, Typography } from "@material-ui/core";
import React from "react";
import Logo from "../components/Logo";
import { useStyles } from "../styles";

export default function PaymentScreen(props) {
  const styles = useStyles();
  return (
    <Box className={[styles.root, styles.navy]}>
      <Box className={[styles.main, styles.center]}>
        <Box>
          <Logo large></Logo>
          <Typography
            gutterBottom
            className={styles.title}
            variant="h3"
            component="h3"
          >
            Prosze o podazanie za instrukcja na PIN pad
          </Typography>
          <CircularProgress />
        </Box>
      </Box>
      <Box className={[styles.center, styles.space]}>
        <Button
          onClick={() => props.history.push("/complete")}
          variant="contained"
          color="primary"
          className={styles.largeButton}
        >
          Zamówienie kompletne
        </Button>
      </Box>
    </Box>
  );
}
