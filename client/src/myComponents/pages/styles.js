import { createStyles, makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      height: "100vh",
      overflow: "scroll",
      paddingBottom: 110,
    },
  })
);
export default styles;
