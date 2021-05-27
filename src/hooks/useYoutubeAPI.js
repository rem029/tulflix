import { useEffect, useState } from "react";
import useAxios from "./useAxios";

export const type = {
  channel: "channel",
  playlists: "playlists",
  playlist_item: "playlist_item",
  videoInfo: "videoInfo",
  channelActivity: "channelActivity",
  channelVideos: "channelVideos",
};

export const responseSchema = {
  loading: true,
  results: [],
  error: null,
};

const useYoutubeAPI = (
  type,
  key,
  id = "0",
  maxResults = 50,
  pageToken = ""
) => {
  const urls = {
    channel: `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=statistics&part=contentDetails&part=topicDetails&id=${id}&maxResults=${maxResults}&key=${key}`,
    playlists: `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${id}&maxResults=${maxResults}&key=${key}`,
    playlist_item: ` https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&part=id&part=contentDetails&part=status&playlistId=${id}&maxResults=${maxResults}&key=${key}`,
    videoInfo: `https://youtube.googleapis.com/youtube/v3/videos?id=${id}&part=snippet&part=statistics&maxResults=${maxResults}&key=${key}`,
    channelActivity: `https://youtube.googleapis.com/youtube/v3/activities?part=contentDetails&part=snippet&channelId=${id}&maxResults=${maxResults}&key=${key}`,
    channelVideos: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${id}&maxResults=${maxResults}&order=date&type=video&key=${key}`,
  };

  const [results, setResult] = useState([]);
  const { loading, error, response } = useAxios("get", urls[type]);

  useEffect(() => {
    if (response || error) {
      if (error) {
        setResult(error);
      } else {
        setResult(response.data.items);
      }
    }
  }, [response, error]);

  return { loading, error, results };
};

export default useYoutubeAPI;
