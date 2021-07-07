import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import { DeleteOutlined } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 20,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  clicked: {
    marginBottom: 20,
    backgroundColor: "#f1f1f1",
  },
}));

const namePlan = (input) => {
  switch (input) {
    case "movie":
      return `Movie Plan`
    case "tv":
      return `TV Show Plan`
    default:
      return `Error`
  } 
}

export default function WatchplanRow(props) {
    const classes = useStyles();

  return (
    <div>
      <Card className={classes.root} id={0}>
           <CardActionArea onClick={()=>props.handleToggle(props.index)}>
             <CardHeader
               action={
                 <IconButton onClick={()=> props.handleTrash(props.index)} >
                   <DeleteOutlined />
                 </IconButton>
               }
               title={namePlan(props.medium)}
               subheader={`Total Runtime: ${props.runtime} minutes`}
             />
           </CardActionArea>
         </Card>
    </div>
  )
}