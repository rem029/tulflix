import useYoutubeAPI, { type } from '../services/useYoutubeAPI';

const apiKEY = process.env.REACT_APP_KEY;
const chId = 'UCxhygwqQ1ZMoBGQM2yEcNug'; //TULFO CHANNEL ID

const ytAPI = {
  GetChannelInfo: (channelId = chId) => useYoutubeAPI(type.channel, apiKEY, channelId),

  GetChannelActivity: (channelId = chId) => useYoutubeAPI(type.channelActivity, apiKEY, channelId),

  GetChannelVideos: (channelId = chId) => useYoutubeAPI(type.channelVideos, apiKEY, channelId),

  GetPlaylists: (channelId = chId) => useYoutubeAPI(type.playlists, apiKEY, channelId),

  GetPlaylistItems: (playlistId) => useYoutubeAPI(type.playlist_item, apiKEY, playlistId),

  GetVideoInfo: (videoId) => useYoutubeAPI(type.videoInfo, apiKEY, videoId),
};

export default ytAPI;
