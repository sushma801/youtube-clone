import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL,options } from "./API";
import axios from "axios";

const initialState = {
  videos: [],
  videoDetails: [],
  clickedRelatedVideo: [],
  searchedVideo: [],
  channelDetails: [],
  channelVideos: [],
};


export const fetchAllVideoData = createAsyncThunk(
  "fetchAllVideoData",
  async (selectedCategory) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/search?part=snippet&q=${selectedCategory}`,
        options
      );
      return data.items;
    } catch (e) {
      return e.message;
    }
  }
);
export const fetchVideoDetails = createAsyncThunk(
  "fetchVideoDetails",
  async (id) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/videos?part=snippet,statistics&id=${id}`,
        options
      );
      return data.items[0];
    } catch (e) {
      return e.message;
    }
  }
);
export const fetchClickedRelatedVideo = createAsyncThunk(
  "fetchClickedRelatedVideo",
  async (id) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/search?part=snippet&relatedToVideoId=${id}&type=video`,
        options
      );
      return data.items;
    } catch (e) {
      return e.message;
    }
  }
);
export const fetchSearchFeed = createAsyncThunk(
  "fetchSearchFeed",
  async (searchTerm) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/search?part=snippet&q=${searchTerm}`,
        options
      );
      return data.items;
    } catch (e) {
      return e.message;
    }
  }
);
export const fetchChannelDetails = createAsyncThunk(
  "fetchChannelDetails",
  async (id) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/channels?part=snippet&id=${id}`,
        options
      );
        
      return data.items[0];
    } catch (e) {}
  }
);
export const fetchChannelRelatedVideo = createAsyncThunk(
  "fetchChannelRelatedVideo",
  async (id) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/search?channelId=${id}&part=snippet&order=date`,
        options
      );
      return data.items;
    } catch (e) {
      return e.message;
    }
  }
);
const youtubeSlice = createSlice({
  name: "Youtube",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllVideoData.fulfilled, (state, action) => {
      state.videos = action.payload;
    });
    builder.addCase(fetchVideoDetails.fulfilled, (state, action) => {
      state.videoDetails = action.payload;
    });
    builder.addCase(fetchClickedRelatedVideo.fulfilled, (state, action) => {
      state.clickedRelatedVideo = action.payload;
    });
    builder.addCase(fetchSearchFeed.fulfilled, (state, action) => {
      state.searchedVideo = action.payload;
    });
    builder.addCase(fetchChannelDetails.fulfilled, (state, action) => {
      state.channelDetails = action.payload;
    });
    builder.addCase(fetchChannelRelatedVideo.fulfilled, (state, action) => {
      state.channelVideos = action.payload;
    });
  },
});
export default youtubeSlice;
