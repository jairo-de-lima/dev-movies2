import api from "./api";

export async function getSerieById(serieId) {
  const { data } = await api.get(`/tv/${serieId}`);
  return data;
}
export async function getSerieVideos(serieId) {
  const {
    data: { results },
  } = await api.get(`/tv/${serieId}/videos`);
  return results;
}

export async function getSerieCredits(serieId) {
  const {
    data: { cast },
  } = await api.get(`/tv/${serieId}/credits`);
  return cast;
}
export async function getTopSeries() {
  const {
    data: { results },
  } = await api.get("/tv/top_rated");
  return results;
}
export async function getPopularSeries() {
  const {
    data: { results },
  } = await api.get("/tv/popular");
  return results;
}
