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
    overflowX: "hidden",
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
  logo: {
    height: 50,
  },
  cards: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  cardWidth: {
    maxWidth: 250,
  },
  card: {
    margin: 10,
  },
  title: {
    marginTop: 18,
  },
  space: {
    padding: 10,
  },
  media: {
    width: 200,
    margin: "auto",
  },
  largeButton: {
    width: 250,
  },
  largeInput: {
    width: "60px!important",
    padding: "0!important",
    fontSize: "35px!important",
    textAlign: "center!important",
  },
  bordered: {
    borderWidth: 2,
    borderRadius: 5,
    margin: 5,
    borderStyle: "solid",
  },
  row: {
    display: "flex",
    padding: 10,
  },
  around: {
    justifyContent: "space-around",
  },
  between: {
    justifyContent: "space-between",
  },
  column: {
    flexDirection: "column",
  },
}));
