import api from "./api";

export async function getTopPeople() {
  const {
    data: { results },
  } = await api.get("/person/popular");
  return results;
}
export async function getPersonCredits(personId) {
  const { data } = await api.get(`/person/${personId}`);
  return data;
}





