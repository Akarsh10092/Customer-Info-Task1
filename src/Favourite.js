import React, { useEffect, useState } from "react";
import Receipe from "./Recipe";
import axios from "axios";
import { Grid } from "@mui/material";
const Favourite = () => {
  const APP_ID = "36aa2bab";
  const APP_KEY = "9a5946913eb3f984a53b002539048364";
  const [recipe, setReciepe] = useState([]);
  useEffect(() => {
    getReciepe();
    console.log();
  }, []);
  const getReciepe = async () => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setReciepe(response.data.hits);
  };
  return (
    <>
      <h1>Favorite Items</h1>
      <div className="App"></div>
      <Grid container>
        {recipe.map((recipe) => (
          <Grid container item xs={2}>
            <Receipe
              className="recipe"
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Favourite;
