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
    break;
    default:
      return "No name"
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
               subheader={`Total runtime: ${props.runtime} minutes`}
             />
           </CardActionArea>
         </Card>
    </div>
  )
}






// const useStyles = makeStyles((theme) => ({
//   root: {
//     marginBottom: 20,
//   },
//   media: {
//     height: 0,
//     paddingTop: "56.25%",
//   },
//   clicked: {
//     marginBottom: 20,
//     backgroundColor: "#f1f1f1",
//   },
// }));

// let movieCounter = 0
// let tvCounter = 0

// export default function WatchplanRow(props) {
//   const classes = useStyles();
//   const [clickedStatus, setClickedStatus] = useState(classes.root);
//   const [trash, setTrash] = useState(false);

//   const toggleState = () => {
//     clickedStatus === classes.root
//       ? setClickedStatus(classes.clicked)
//       : setClickedStatus(classes.root);
//     // setClickedStatus(classes.clicked)
//     props.selectPlan();
//   };

//   const handleTrash = () => {
//     setTrash(true);
//     console.log("trash");
//   };

//     const planTitle = (input) => {
//       if (input === "movie") {
//         movieCounter += 1
//         return "Movie Plan" + 1
//       } else if (input === "tv") {
//         movieCounter += 1
//         return "TV Show Plan" + 1
//       }
//     }

//   return (
//     <div>
//       {trash ? (
//         ""
//       ) : (
//         <Card className={clickedStatus} id={0}>
//           <CardActionArea onClick={toggleState}>
//             <CardHeader
//               action={
//                 <IconButton onClick={handleTrash} >
//                   <DeleteOutlined />
//                 </IconButton>
//               }
//               title={planTitle(props.medium)}
//               subheader="Added on: Date | Runtime: 40 hours"
//             />
//           </CardActionArea>
//         </Card>
//       )}
//     </div>
//   );
// }
