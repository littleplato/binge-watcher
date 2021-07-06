import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { DeleteOutlined } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";

const posterURL = "https://image.tmdb.org/t/p/w780/";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

export default function TVRow({ data }) {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardHeader
            action={
              <IconButton>
                <DeleteOutlined />
              </IconButton>
            }
            title={data.name}
            subheader={`Release Date: ${data.first_air_date}`}
          />
          <CardMedia
            image={`${posterURL}${data.backdrop_path}`}
            className={classes.media}
            title={data.title}
          />
          <CardContent>
          <Typography variant="h6" gutterBottom>
            Episodes: {data.number_of_episodes}<br/>
            Seasons: {data.number_of_seasons}
            </Typography>
            
            <Typography variant="body2" color="textSecondary" component="p">
              {data.overview}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Watch Trailer
          </Button>
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

