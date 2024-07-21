import styled from "styled-components";

export const Container = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem;
`;

export const Cover = styled.div`
  img {
    border-radius: 0.8rem;
    width: 250px;
    height: auto;
    margin: 1.2rem 0;
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

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
    margin: 0.8rem 0;
  }
`;

export const Movie = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
color: #fff;
margin: 1rem;
`