import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  navy: {
    backgroundColor: "#00c3ff",
  },
  orange: {
    backgroundColor: "#fea735",
    color: "#ffffff",
  },
  main: {
    flex: 1,
    overflow: "auto",
    flexDirection: "column",
    display: "flex",
    color: "#ffffff",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  blue: {
    backgroundColor: "#00c3ff",
  },
  largeLogo: {
    height: 100,
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    margin: 10,
  },
  space: {
    padding: 10,
  },
  media: {
    width: 200,
  },
}));
