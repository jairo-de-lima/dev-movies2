import { Container, Background, Cover, Info, ContainerMovies } from "./style";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getSerieById,
  getSerieCredits,
  getSerieVideos,
  getPopularSeries
} from "../../services/getSeries";
import { getImages } from "../../../utils/getImages";
import SpanGenres from "../SpanGenres/index";
import Credits from "../Credits/index";
import Slider from "../Slider";

function DetailSerie() {
  const { id } = useParams();
  const [serie, setSerie] = useState({});
  const [credits, setCredits] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getSerieById(id),
        getSerieVideos(id),
        getSerieCredits(id),
        getPopularSeries(id)
      ])
        .then(([serie, video, credits, similar]) => {
          setSerie(serie),
            setVideos(video),
            setCredits(credits),
            setSimilar(similar)
        })
        .catch((error) => console.error(error));
    }
    getAllData();
  }, [id]);

  return (
    <>
      {serie && <Background image={getImages(serie.backdrop_path)} />}
      <Container>
        <Cover>
          <img src={getImages(serie.poster_path)} alt={serie.title} />
        </Cover>
        <Info>
          <h2>{serie.name}</h2>
          <SpanGenres genres={serie.genres} />
          <p>{serie.overview}</p>
          <div>
            <Credits credits={credits} />
          </div>
        </Info>
      </Container>
      <ContainerMovies>
        {videos &&
          videos.map((video) => (
            <div key={video.id}>
              <h4>{video.name}</h4>
              <iframe
                src={`https://www.youtube.com/embed/${video.key}`}
                title="youtube Video Player"
              ></iframe>
            </div>
          ))}
      </ContainerMovies>
      {similar && <Slider info={similar} title={"Series Similares"} type="series" />}
    </>
  );
}

export default DetailSerie;
