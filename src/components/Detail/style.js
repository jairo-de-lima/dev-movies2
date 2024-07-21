import styled, { keyframes } from "styled-components";
const scale = keyframes`
    from{
        transform: scale(0);
        }
        to{
            transform: scale(1);
        }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  max-width: 1500px;
  margin-top: -100px;
`;
export const Background = styled.div`
  background-image: url(${(props) => props.image});
  height: 50vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 120px;
    background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
  }
`;
export const Cover = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  height: 100%;
  z-index: 99;

  img {
    width: 420px;
    border-radius: 30px;
    box-shadow: rgb(100 100 100 / 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.5s linear;
  }
`;
export const Info = styled.div`
  width: 50%;
  display: flex;
  z-index: 1;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 20px;

  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
  }

  p {
    font-size: 1.2rem;
    color: #fff;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;
export const ContainerMovies = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 100%;

  div{
     display: flex;
     flex-direction: column;
     max-width: 1000px;
     width: 100%;
     height: 100%;
     margin: 20px 0;
  }
  h4{
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
  }

  iframe{
    border: none;
    height: 500px;
  }
`
