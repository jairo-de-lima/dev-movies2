import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3.1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem;

  @media(max-width: 850px){
    flex-direction: column;
    padding: 1rem;
  }
`;

export const Cover = styled.div`
  img {
    border-radius: 0.8rem;
    width: 15.6rem;
    height: auto;
    margin: 1.2rem 0;
  }
  @media(max-width: 850px){
    img {
      width: 10rem;
      overflow: hidden;
    }
  }

`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 0.8rem;
  color: white;
  background-color: #696969;

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
    margin: 0.8rem 0;
  }
  @media(max-width: 850px) {
    padding: 0.5rem;

    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.8rem;
    }
  }

`;

export const Movie = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
color: #fff;
margin: 1rem;

@media (max-width: 850px) {
  margin: 0;
}
`