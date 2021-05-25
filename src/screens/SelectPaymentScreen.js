import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import { setPaymentType } from "../actions";
import Logo from "../components/Logo";
import { useStyles } from "../styles";
import { Store } from "../Store";

export default function SelectPaymentScreen(props) {
  const { dispatch } = useContext(Store);
  const styles = useStyles();
  const selectHandler = (paymentType) => {
    setPaymentType(dispatch, paymentType);
    if (paymentType === "Zaplac teraz") {
      props.history.push("/payment");
    } else {
      props.history.push("/complete");
    }
  };
  return (
    <Box className={[styles.root, styles.navy]}>
      <Box className={[styles.main, styles.center]}>
        <Logo large></Logo>
        <Typography
          className={styles.center}
          gutterBottom
          variant="h3"
          component="h3"
        >
          Wybierz rodzaj płatności
        </Typography>
      </Box>
      <Box className={styles.cards}>
        <Card className={[styles.card, styles.space]}>
          <CardActionArea onClick={() => selectHandler("Zaplac teraz")}>
            <CardMedia
              component="img"
              alt="Zaplac teraz"
              image="/images/payhere.png"
              className={styles.media}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                color="textPrimary"
                component="p"
              >
                Zapłac tutaj
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={[styles.card, styles.space]}>
          <CardActionArea onClick={() => selectHandler("Przy kasie")}>
            <CardMedia
              component="img"
              alt="Przy kasie"
              image="/images/payhere.png"
              className={styles.media}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                color="textPrimary"
                component="p"
              >
                Płatność przy kasie
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
}
