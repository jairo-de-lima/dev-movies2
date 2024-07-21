import { Container, Cover, Info, Movie } from "./style";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTopPeople, getPersonCredits } from "../../services/getPerson";
import { getImages } from "../../../utils/getImages";
import Slider from "../Slider";

function DetailPerson() {
  const { id } = useParams();
  const [person, setPerson] = useState({});
  const [credits, setCredits] = useState([]);
  const [knownFor, setKnownFor] = useState([]);
  const [popularPeople, setPopularPeople] = useState([]);

  useEffect(() => {
    async function getAllData() {
      try {
        const [personDetails, popularPeopleData] = await Promise.all([
          getPersonCredits(id),
          getTopPeople(),
        ]);

        setPerson(personDetails);
        setCredits(personDetails.credits);
        const specificPerson = popularPeopleData.find(
          (person) => person.id === parseInt(id)
        );
        if (specificPerson) {
          setKnownFor(specificPerson.known_for);
        }
        setPopularPeople(popularPeopleData);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    if (id) {
      getAllData();
    }
  }, [id]);
  console.log(credits)

  return (
    <>
      <Container>
        <Cover>
          <img src={getImages(person.profile_path)} alt={person.name} />
        </Cover>
        <Info>
          <h2>{person.name}</h2>
          <p>{person.biography}</p>
        </Info>
      </Container>
      <Movie>
        {knownFor.length > 0 && (
          <Slider info={knownFor} title={"Conhecido Por"} type="movie" />
        )}
      </Movie>
      {popularPeople.length > 0 && (
        <Slider info={popularPeople} title={"Conhecido Por:"} type="person" />
      )}
    </>
  );
}

export default DetailPerson;
