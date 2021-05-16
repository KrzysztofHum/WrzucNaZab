import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Fade,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import { setOrderType } from "../actions";
import Logo from "../components/Logo";
import { Store } from "../Store";
import { useStyles } from "../styles";

export default function ChooseScreen(props) {
  const styles = useStyles();
  const {dispatch} = useContext(Store);

  const chooseHandler = (orderType) => {
	  setOrderType(dispatch, orderType);
	  props.history.push('/order');
  }
  return (
    <Fade in={true}>
      <Box className={[styles.root, styles.navy]}>
        <Box className={[styles.main, styles.center]}>
          <Logo large></Logo>
          <Typography
            variant="h3"
            component="h3"
            className={styles.center}
            gutterBottom
          >
            Gdzie dzis zjesz posiłek ?
          </Typography>
          <Box className={styles.cards}>
            <Card className={[styles.card, styles.space]}>
              <CardActionArea onClick={() => chooseHandler('Zjem na miejscu')}>
                <CardMedia
                  component="img"
                  alt="Zjedz tu"
                  image="/images/zjedz.png"
                  className={styles.media}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    color="textPrimary"
                    component="p"
                  >
                    Zjedz na miejscu
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className={[styles.card, styles.space]}>
              <CardActionArea onClick={() => chooseHandler('Zjem na wynos')}>
                <CardMedia
                  component="img"
                  alt="Zjedz tu"
                  image="/images/wynos.png"
                  className={styles.media}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    color="textPrimary"
                    component="p"
                  >
                    Zjedz na wynos
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}
