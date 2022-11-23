
export const BASE_URL = "https://youtube-v31.p.rapidapi.com";
export const USER_URL = "http://localhost:3000/users";
// const options = {
//   params: {
//     maxResults: "50",
//   },
//   headers: {
//     "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
//     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
//   },
// };
export const options = {
  method: "GET",
  url: "https://youtube-v31.p.rapidapi.com",
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "6b948b370bmshabd0f8ccf34cbc6p1f4e0fjsn6db2db849eb4",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

