import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";

let genreList = []

const posterURL = "https://image.tmdb.org/t/p/w780/";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    marginBottom: 20,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

export default function MovieRow({ data }) {
  const classes = useStyles();
  const [heartIcon, setHeartIcon] = useState({state: "unloved", icon: <FavoriteBorderIcon />})

  const toggleHeart = () => {
    if(heartIcon.state === "unloved") {
      setHeartIcon({state: "loved", icon: <FavoriteIcon className={classes.heart} color="secondary"/>})
    } else if (heartIcon.state === "loved") {
      setHeartIcon({state: "unloved", icon: <FavoriteBorderIcon/>})
    }
  }

  genreList = data.genres.map(genre => genre.name).join(", ")

  return (
    <div>
      <Card className={classes.root}>
          <CardHeader
            action={
              <IconButton onClick={toggleHeart} >
                {heartIcon.icon}
              </IconButton>
            }
            title={data.title}
            subheader={`Release Date: ${data.release_date}`}
          />
          <CardMedia
            image={`${posterURL}${data.backdrop_path}`}
            className={classes.media}
            title={data.title}
          />
          <CardContent>
          <Typography variant="h6" gutterBottom>
            Genres: {genreList}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {data.overview}
            </Typography>
          </CardContent>
 
        <CardActions>

          <Button
            size="small"
            color="primary"
            href={data.homepage}
            target="_blank"
          >
            Visit Streaming Site
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
