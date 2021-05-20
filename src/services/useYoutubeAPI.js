import { useEffect, useState } from "react";
import useAxios from "../services/useAxios";

export const type = {
  channel: "channel",
  playlists: "playlists",
  playlist_item: "playlist_item",
  videoInfo: "videoInfo",
  channelActivity: "channelActivity",
  channelVideos: "channelVideos",
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
    channelVideos: "",
  };

  const [result, setResult] = useState(null);
  const { loading, error, response } = useAxios("get", urls[type]);

  useEffect(() => {
    if (response) {
      if (response.data.items) {
        setResult(response.data.items);
      }
    }
  }, [response]);

  return { loading, error, result };
};

export default useYoutubeAPI;
