import React from "react";
import { Box, Card, CardActionArea, Typography } from "@material-ui/core";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import { useStyles } from "../styles";
import Logo from "../components/Logo";

export default function HomeScreen(props) {
  const styles = useStyles();
  return (
    <div>
      <Card>
        <CardActionArea onClick={() => props.history.push('/choose')}>
          <Box className={[styles.root, styles.orange]}>
            <Box className={[styles.main, styles.center]}>
              <Typography component="h6" variant="h6">
                Szybko & Łatwo
              </Typography>
              <Typography component="h1" variant="h1">
                Zamów <br /> & zapłać <br /> tutaj
              </Typography>
              <TouchAppIcon fontSize="large"></TouchAppIcon>
            </Box>
            <Box className={[styles.center, styles.blue]}>
              <Logo large></Logo>
              <Typography component="h5" variant="h5">
                Kliknij aby rozpocząć
              </Typography>
            </Box>
          </Box>
        </CardActionArea>
      </Card>
    </div>
  );
}
