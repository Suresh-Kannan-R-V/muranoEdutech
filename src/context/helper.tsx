export function getYoutubeUrls(url?: string) {
  if (!url) return { embedUrl: undefined, watchUrl: undefined };

  let videoId = "";

  if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1].split("?")[0];
  } else if (url.includes("watch?v=")) {
    videoId = url.split("watch?v=")[1].split("&")[0];
  } else if (url.includes("/embed/")) {
    videoId = url.split("/embed/")[1].split("?")[0];
  }

  return {
    embedUrl: videoId
      ? `https://www.youtube.com/embed/${videoId}`
      : undefined,
    watchUrl: videoId
      ? `https://www.youtube.com/watch?v=${videoId}`
      : undefined,
  };
}
