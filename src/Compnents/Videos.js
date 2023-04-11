import React from "react";
import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const videos = ({ videos }) => {
  // console.log(videos);
  if (!videos?.length) return "Loading....";
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start">
      {videos.map((item, index) => (
        <Box className=" m-1 hover:scale-105 duration-200" key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default videos;
