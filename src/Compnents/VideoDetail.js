import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { CheckCircle } from "@mui/icons-material";
import Videos from "./Videos";
import { fetching } from "../UTILS/api";
import { Box, Stack, Typography } from "@mui/material";

const VideoDetail = () => {
  const [videoDetail, setvideosDetail] = useState(null);
  const { id } = useParams();
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetching(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setvideosDetail(data.items[0]);
    });

    fetching(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail) return "Loading...";

  const {
    snippet: { title, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", lg: "column" }}>
        <Box flex={1}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "sticky",
              top: "86",
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls={true}
              width="100%"
              height="77vh"
            />
            <Typography color="#fff" varient="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <div className="">
          <Videos videos={videos} />
        </div>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
