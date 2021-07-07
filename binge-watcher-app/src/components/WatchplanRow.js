import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import { DeleteOutlined } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  clicked: {
    marginTop: 20,
    backgroundColor: "#f1f1f1",
  }
}));

export default function WatchplanRow(props) {
  const classes = useStyles();
  const [clickedStatus, setClickedStatus] = useState(classes.root)
  const [trash, setTrash] = useState(false)

  const toggleState = () => {
    clickedStatus === classes.root ? setClickedStatus(classes.clicked) : setClickedStatus(classes.root)
    // setClickedStatus(classes.clicked)
    props.selectPlan()
  }

  const handleTrash = () => {
    setTrash(true)
    console.log("trash")
  }

  return <div>

    {trash ? "" : <Card className={clickedStatus} id={0}>
    <CardActionArea onClick={toggleState}>
    <CardHeader
            action={
              <IconButton onClick={handleTrash}>
                <DeleteOutlined />
              </IconButton>
            }
            title="Movie Plan 1"
            subheader="Added on: Date | Runtime: 40 hours"
          />
      </CardActionArea>
    </Card> }

    {/* <Card className={clickedStatus} id={0}>
    <CardActionArea onClick={toggleState}>
    <CardHeader
            action={
              <IconButton onClick={handleTrash}>
                <DeleteOutlined />
              </IconButton>
            }
            title="Movie Plan 1"
            subheader="Added on: Date | Runtime: 40 hours"
          />
      </CardActionArea>
    </Card> */}
    
  </div>;
}
