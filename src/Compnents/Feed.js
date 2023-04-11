import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetching } from "../UTILS/api";
// import { categories } from "../UTILS/constants";

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState("New");
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    fetching(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setvideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column ", md: "row" } }}>
      {/* SideBar Section */}

      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        />
        <Typography
          className="copyright"
          varient="body2"
          sx={{ mt: 1.4, color: "#fff" }}
        >
          Copyright 2023 MERN
        </Typography>
      </Box>

      {/* Video section */}
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2}>
          <span className="text-white">{selectedCategory} </span>
          <span className="text-red-900">Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
