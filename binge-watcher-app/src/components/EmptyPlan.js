import React from 'react'
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: 20,
      },
}))

export default function EmptyPlan() {
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h3" gutterBottom>
                Oops.
            </Typography>
            <Typography>
                Looks like you have not saved a watchplan. 
            </Typography>
        <RouterLink to="/generate" style={{ textDecoration: "none" }}>
          <Button variant="outlined" size="large" className={classes.button}>Generate a Plan Now!</Button>
        </RouterLink>
        </div>
    )
}
