import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Receipe = ({ title, image, ingredients }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [color, setColor] = useState("grey");
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleClick = () => {
    setColor("red");
  };
  return (
    <div>
      <Card sx={{ maxWidth: 200, margin: "10px 10px" }}>
        <CardHeader title={title} />
        <CardMedia
          component="img"
          height="194"
          width="200"
          image={image}
          alt=""
          title={title}
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon style={{ color: `${color}` }} onClick={handleClick} />
          </IconButton>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <div>Ingredients</div>
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Ingredients to be used:</Typography>
            {ingredients.map((ingredient) => (
              <Typography>{ingredient.text}</Typography>
            ))}
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default Receipe;
