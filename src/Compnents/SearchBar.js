import React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setsearchTerm] = useState("");

  const navigate = useNavigate();

  return (
    <Paper
      component="form"
      onSubmit={(event) => {
        // will prevent reload
        event.preventDefault();
        if (searchTerm) {
          navigate(`/search/${searchTerm}`);
          setsearchTerm("");
        }
      }}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className=" appearance-none outline-none search-bar"
        value={searchTerm}
        placeholder="Search"
        onChange={(event) => {
          setsearchTerm(event.target.value);
        }}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
