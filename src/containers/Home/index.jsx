import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Background,
  Description,
  Image,
  Box,
  ContainerButtons,
} from "./styles";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import { getImages } from "../../../utils/getImages";
import Modal from "../../components/Modal";
import { getMovies, getTopMovies, getMovieReleases } from "../../services/getData";
import {  getTopPeople } from "../../services/getPerson"
import { getTopSeries, getPopularSeries, getAringsToday } from "../../services/getSeries";

function Home() {
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [topMovies, setTopMovies] = useState([]);
  const [topSeries, setTopSeries] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [topPeople, setTopPeople] = useState([]);
  const [movieReleases, setMovieReleases] = useState([]);
  const [aringsToday, setAringsToday] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
      try {
        const [
          moviesData,
          topMoviesData,
          topSeriesData,
          popularSeriesData,
          topPeopleData,
          movieReleasesData,
          aringsTodayData,
        ] = await Promise.all([
          getMovies(),
          getTopMovies(),
          getTopSeries(),
          getPopularSeries(),
          getTopPeople(),
          getMovieReleases(),
          getAringsToday(),
        ]);

        setMovies(moviesData);
        setTopMovies(topMoviesData); 
        setTopSeries(topSeriesData); 
        setPopularSeries(popularSeriesData); 
        setTopPeople(topPeopleData); 
        setMovieReleases(movieReleasesData);
        setAringsToday(aringsTodayData);
        console.log(aringsTodayData)
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    getAllData();
  }, []);

  const currentMovie = movies[currentMovieIndex];

  const goToNextMovie = () => {
    setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const goToPreviousMovie = () => {
    setCurrentMovieIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      {currentMovie && (
        <Background img={getImages(currentMovie.backdrop_path)}>
          {showModal && (
            <Modal movieId={currentMovie.id} setShowModal={setShowModal} />
          )}
          <Box>
            <Description>
              <h1>{currentMovie.title}</h1>
              <p>{currentMovie.overview}</p>
              <ContainerButtons>
              <Button arrow2 onClick={goToPreviousMovie}></Button>
                <Button red onClick={() => navigate(`/detalhe/${currentMovie.id}`)}>Assista Agora</Button>
                <Button onClick={() => setShowModal(true)}>Assista o Trailer</Button>
                <Button arrow onClick={goToNextMovie}></Button>
              </ContainerButtons>
            </Description>
            <Image>
              <img
                src={getImages(currentMovie.poster_path)}
                alt="capa-do-filme"
              />
            </Image>
          </Box>
        </Background>
      )}
      {movieReleases.length > 0 && <Slider info={movieReleases} title={"Lançamentos"} type="movie" />}
      {topMovies.length > 0 && <Slider info={topMovies} title={"Melhores Filmes"} type="movie" />}
      {topSeries.length > 0 && <Slider info={topSeries} title={"Melhores Séries"} type="series" />}
      {popularSeries.length > 0 && (
        <Slider info={popularSeries} title={"Séries Populares"} type="series" />
      )}
      {aringsToday.length > 0 && <Slider info={aringsToday} title={"Series Em Exibição"} type="series" />}

      {topPeople.length > 0 && (
        <Slider info={topPeople} title={"Melhores Artistas"} type="person"/>
      )}
    </>
  );
}

export default Home;
