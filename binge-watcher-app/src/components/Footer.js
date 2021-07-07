import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {format} from 'date-fns'

const useStyles = makeStyles((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
      },
}))

export default function Footer() {
    const classes = useStyles();
    return (
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
          <Container>
            <Toolbar>
              <Typography variant="body2" color="inherit">
                An experimental optimiser tool based on React by Jerrick. No rights reserved {new Date().getFullYear()}. 
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}