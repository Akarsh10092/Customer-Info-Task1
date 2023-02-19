import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Receipe from "./Recipe";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function App() {
  const APP_ID = "36aa2bab";
  const APP_KEY = "9a5946913eb3f984a53b002539048364";
  const [recipe, setReciepe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("banana");
  useEffect(() => {
    getReciepe();
  }, [query]);
  const getReciepe = async () => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setReciepe(response.data.hits);
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const updateQuery = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <>
      <div className="App">
        <Paper
          className="search"
          onSubmit={updateQuery}
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            type="text"
            value={search}
            onChange={updateSearch}
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Your Fav Recipes"
            inputProps={{ "aria-label": "search recipes" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
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
}

export default App;
