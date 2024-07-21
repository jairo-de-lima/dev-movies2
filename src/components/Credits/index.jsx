/* eslint-disable react/prop-types */
import { Container, Title } from "./style";
import { getImages } from "../../../utils/getImages";

function Credits({ credits }) {
  return (
    <>
      <Title>Creditos</Title>
      {credits && (
        <Container>
          {credits.slice(0, 5).map((artist) => (
            <div key={artist.cast_id}>
              <img src={getImages(artist.profile_path)} alt={artist.name} />
              <p>{artist.original_name}</p>
            </div>
          ))}
        </Container>
      )}
    </>
  );
}

export default Credits;
