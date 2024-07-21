import { Container, Background, Cover, Info, ContainerMovies } from "./style";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideos,
} from "../../services/getData";
import { getImages } from "../../../utils/getImages";
import SpanGenres from "../SpanGenres/index";
import Credits from "../Credits/index";
import Slider from "../Slider"


function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovieById(id),
        getMovieVideos(id),
        getMovieCredits(id),
        getMovieSimilar(id),
      ])
        .then(([movie, video, credits, similar]) => {
          setMovie(movie),
            setVideos(video),
            setCredits(credits),
            setSimilar(similar);
        })
        .catch((error) => console.error(error));
    }
    getAllData();
  }, [id]);

  return (
    <>
      {movie && <Background image={getImages(movie.backdrop_path)} />}
      <Container>
        <Cover>
          <img src={getImages(movie.poster_path)} alt={movie.title} />
        </Cover>
        <Info>
          <h2>{movie.title}</h2>
          <SpanGenres genres={movie.genres} />
          <p>{movie.overview}</p>
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
      {similar && <Slider info={similar} title={"Filmes Similares"} type="movie" />}
    </>
  );
}

export default Detail;
