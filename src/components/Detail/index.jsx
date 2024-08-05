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
import Slider from "../Slider";
import Button from "../../components/Button"; 
import MovieEmbed from '../../containers/Embed'; // Adicione a importação do componente MovieEmbed

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [videos, setVideos] = useState([]);
  const [showEmbed, setShowEmbed] = useState(false); // Estado para controlar a exibição do embed

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

  const handleWatchClick = () => {
    setShowEmbed(true);
  };

  const handleCloseEmbed = () => {
    setShowEmbed(false);
  };

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
          <p>Data de Lançamento: {new Date(movie.release_date).toLocaleDateString('pt-BR')}</p>
          <div>
            <Credits credits={credits} />
          </div>
          <Button watch onClick={handleWatchClick}>Assistir</Button> {/* Botão para assistir */}
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
                allowFullScreen
              ></iframe>
            </div>
          ))}
      </ContainerMovies>
      {showEmbed && <MovieEmbed type="filme" id={id} onClose={handleCloseEmbed} />} {/* Renderiza o embed se showEmbed for verdadeiro */}
      {similar && <Slider info={similar} title={"Filmes Similares"} type="movie" />}
    </>
  );
}

export default Detail;
