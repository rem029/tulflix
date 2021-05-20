import { useEffect, useState } from "react";
import useAxios from "../services/useAxios";

export const type = {
  channel: "channel",
  playlists: "playlists",
  playlist_item: "playlist_item",
  video_info: "video_info",
};

const useYoutubeAPI = (type, key, id = "0", maxResults = 50) => {
  const urls = {
    channel: `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=statistics&part=contentDetails&part=topicDetails&id=${id}&maxResults=${maxResults}&key=${key}`,
    playlists: `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${id}&maxResults=${maxResults}&key=${key}`,
    playlist_item: ` https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&part=id&part=contentDetails&part=status&playlistId=${id}&maxResults=${maxResults}&key=${key}`,

    video_info: `https://youtube.googleapis.com/youtube/v3/videos?id=${id}&part=snippet&part=statistics&maxResults=${maxResults}&key=${key}`,
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
