/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Background, Container, Close } from './style';

const MovieEmbed = ({ type, id, season, episode, onClose }) => {
  useEffect(() => {
    const embedScript = document.createElement("script");
    embedScript.innerHTML = `
      var type = "${type}";
      var imdb = "${id}";
      var season = "${season || ""}";
      var episode = "${episode || ""}";
      SuperFlixAPIPluginJS(type, imdb, season, episode);
      function SuperFlixAPIPluginJS(type, imdb, season, episode){
        if (type == "filme") { season=""; episode=""; } else {
          if (season !== "") { season = "/" + season; }
          if (episode !== "") { episode = "/" + episode; }
        }
        var frame = document.getElementById('SuperFlixAPIContainerVideo');
        frame.innerHTML = '<iframe src="https://superflixapi.dev/' + type + '/' + imdb + season + episode + '" scrolling="no" frameborder="0" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen=""></iframe>';
      }
    `;
    document.body.appendChild(embedScript);
    return () => {
      document.body.removeChild(embedScript);
    };
  }, [type, id, season, episode]);

  return (
    <Background>
      <Container id="SuperFlixAPIContainerVideo">
        <Close onClick={onClose}>&times;</Close>
      </Container>
    </Background>
  );
};

export default MovieEmbed;
