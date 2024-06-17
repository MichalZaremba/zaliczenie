/* eslint-disable prettier/prettier */
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";

export const Searchbar = () => {
  const [query, setQuery] = useState("chicken");
  console.log(query);
  async function fetchRecipes() {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?q=chicken&type=public&app_id=8e0adbd2&app_key=b951f76097d27dd724aacfa6f30605ea`);
    const data = await response.json();
    console.log(data);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function handleChange(event) {
      setQuery(event.target.value);
    }

    useEffect(() => {
      fetchRecipes();
    }, [query]);

  return (
    <TextField
      label="Wyszukaj"
      InputProps={{
        endAdornment: (
          <InputAdornment>
            <IconButton onClick={fetchRecipes}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
};
