/* eslint-disable prettier/prettier */
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";

const fetchRecipes = async (query, setRecipes) => {
  const response = await fetch(
    `https://api.edamam.com/api/recipes/v2?q=${query}&type=public&app_id=8e0adbd2&app_key=b951f76097d27dd724aacfa6f30605ea`,
  );
  const data = await response.json();
  console.log(data);
  setRecipes(data.hits);
};

export const Searchbar = ({ setRecipes }) => {
  const [query, setQuery] = useState("chicken");
  console.log(query);

  function handleChange(event) {
    setQuery(event.target.value);
  }

  useEffect(() => {
    fetchRecipes(query, setRecipes);
  }, [query, setRecipes]);

  return (
    <TextField
      label="Search"
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => fetchRecipes(query, setRecipes)}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
};
