import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        paddingBottom: 30,
        marginLeft: 20
      },
}))

export default function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
          <Container >
              <Typography variant="subtitle2" color="inherit">
                A React application by Wee Jerrick. See source on GitHub. 
              </Typography>
          </Container>
          </div>
    )
}