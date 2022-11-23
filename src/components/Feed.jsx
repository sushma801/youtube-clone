import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack ,Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { useDispatch,useSelector } from "react-redux";
import { fetchAllVideoData } from "../redux/youtube-slice";
import { LoginCard } from './';
const Feed = () => {

  const [isOpen, setOpenDialog] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('New');
  const dispatch = useDispatch();
  const videoList = useSelector((state) => state.Youtube.videos);
    // useEffect(() => {
    //     fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
    //         setVideos(data.items)
    //     }
    //     );
    // }, [selectedCategory]);
  useEffect(() => {
    dispatch(fetchAllVideoData(selectedCategory));
    setTimeout(() => {
      setOpenDialog(true);
    },10000)
  }, [dispatch, selectedCategory])

 
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: {
            sx: "auto",
            md: "92vh",
          },
          borderRight: "1px solid #3d3d3d",
          px: {
            sx: 0,
            md: 2,
          },
        }}
      >
              <Sidebar
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
              />
        <Typography
          className="copyright"
          variant="body2"
          sx={{
            mt: 1.5,
            color: "#fff",
          }}
        >
          Copyright 2022 Sushma Media
        </Typography>
      </Box>
      <Box p={2} sx={{overflow:'auto',height:'90vh', flex:2}}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>Videos</span>
              </Typography>
              <Videos videos={videoList} />
      </Box>
          {isOpen && <LoginCard open = {isOpen}/>}
    </Stack>
  );
};
export default Feed;
