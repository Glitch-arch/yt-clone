import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
import { fetching } from "../UTILS/api";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setvideos] = useState([]);
  const { searchKeyWord } = useParams();

  useEffect(() => {
    fetching(`search?part=snippet&q=${searchKeyWord}`).then((data) =>
      setvideos(data.items)
    );
  }, [searchKeyWord]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        <span className="text-white">Search results for: </span>
        <span className="text-red-900">{searchKeyWord}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
