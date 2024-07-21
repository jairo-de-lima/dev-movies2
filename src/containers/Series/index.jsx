import React, { useState, useEffect } from "react";
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
import { getTopMovies } from "../../services/getData";
import {  getTopPeople } from "../../services/getPerson"
import { getPopularSeries, getTopSeries } from "../../services/getSeries";

function Series() {
  const [series, setSeries] = useState([]);
  const [currentSeriesIndex, setCurrentSeriesIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [topMovies, setTopMovies] = useState([]);
  const [topSeries, setTopSeries] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [topPeople, setTopPeople] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
      try {
        const [topSeriesData, topMoviesData, popularSeriesData, topPeopleData] =
          await Promise.all([
            getTopSeries(),
            getTopMovies(),
            getPopularSeries(),
            getTopPeople(),
          ]);

        setTopSeries(topSeriesData); 
        setTopMovies(topMoviesData); 
        setPopularSeries(popularSeriesData); 
        setTopPeople(topPeopleData); 
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    getAllData();
  }, []);

 
  const currentSeries = topSeries[currentSeriesIndex];

 
  const goToNextSeries = () => {
    setCurrentSeriesIndex((prevIndex) => (prevIndex + 1) % topSeries.length);
  };

  
  const goToPreviousSeries = () => {
    setCurrentSeriesIndex((prevIndex) =>
      prevIndex === 0 ? topSeries.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      {currentSeries && (
        <Background img={getImages(currentSeries.backdrop_path)}>
          {showModal && (
            <Modal serieId={currentSeries.id} setShowModal={setShowModal} />
          )}
          <Box>
            <Description>
              <h1>{currentSeries.name}</h1>
              <p>{currentSeries.overview}</p>
              <ContainerButtons>
                <Button arrow2 onClick={goToPreviousSeries}></Button>
                <Button
                  red
                  onClick={() => navigate(`/serie/detalhe/${currentSeries.id}`)}
                >
                  Assista Agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
                <Button arrow onClick={goToNextSeries}></Button>
              </ContainerButtons>
            </Description>
            <Image>
              <img
                src={getImages(currentSeries.poster_path)}
                alt="capa-da-série"
              />
            </Image>
          </Box>
        </Background>
      )}

      {topMovies.length > 0 && <Slider info={topMovies} title={"Top Filmes"} type="movie" />}
      {topSeries.length > 0 && <Slider info={topSeries} title={"Top Séries"} type="series"/>}
      {popularSeries.length > 0 && (
        <Slider info={popularSeries} title={"Séries Populares"} type="series" />
      )}
      {topPeople.length > 0 && (
        <Slider info={topPeople} title={"Melhores Artistas"} type="person" />
      )}
    </>
  );
}

export default Series;
