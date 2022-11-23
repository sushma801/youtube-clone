import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { useDispatch, useSelector } from "react-redux";
import { fetchChannelDetails, fetchChannelRelatedVideo } from "../redux/youtube-slice";
const ChannelDetail = () => {
  const { id } = useParams();
  // const [channelDetail, setChannelDetail] = useState(null);
  // const [videos, setVideos] = useState([]);
  const channelDetail = useSelector((state) => state.Youtube.channelDetails);
  const videos = useSelector((state) => state.Youtube.channelVideos);
  const dispatch = useDispatch();
  useEffect(() => {
    // fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
    //   setChannelDetail(data?.items[0]);
    // });
    // fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
    //   (data) => {
    //     setVideos(data?.items);
    //   }
    // );
    dispatch(fetchChannelDetails(id));
    dispatch(fetchChannelRelatedVideo(id));
  }, [id,dispatch]);
  console.log(channelDetail, videos);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,36,9,1) 0%, rgba(2,204,222,1) 0%, rgba(255,0,239,1) 75%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
          </Box>
          <Box display="flex" p="2">
              <Box sx={{ mr: { sm: '100px' } }}/>
                  <Videos videos={videos}/>
              
          </Box>
    </Box>
  );
};
export default ChannelDetail;
