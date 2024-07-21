import { Container, Background, Close } from "./style";
import { useEffect, useState } from "react";
import { getMovieVideos } from "../../services/getData";
import { getSerieVideos } from "../../services/getSeries";

function Modal({ setShowModal, movieId, serieId }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function getAllData() {
      try {
        const videoData = await getMovieVideos(movieId);
        setVideos(videoData);
      } catch (error) {
        console.error(error);
      }
      try {
        const videoData = await getSerieVideos(serieId);
        setVideos(videoData);
      } catch (error) {
        console.error(error);
      }
    }
    getAllData();
  }, []);

  const videoKey = videos.length > 0 ? videos[0].key : null;

  return (
    <Background onClick={() => setShowModal(false)}>
      {videoKey && (
        <Container>
          <iframe
            src={`https://www.youtube.com/embed/${videoKey}`}
            title="Youtube video player"
            height="500px"
            width="100%"
            allowFullScreen
          ></iframe>
          <Close onClick={() => setShowModal(false)}>X</Close>
        </Container>
      )}
    </Background>
  );
}

export default Modal;
