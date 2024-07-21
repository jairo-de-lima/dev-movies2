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
  max-width: 93.75rem;
  margin-top: -6.25rem;
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
    height: 7.5rem;
    background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
  }
`;
export const Cover = styled.div`
  padding: 1.25rem;
  display: flex;
  align-items: flex-start;
  height: 100%;
  z-index: 99;

  img {
    width: 26.25rem;
    border-radius: 1.9rem;
    box-shadow: rgb(100 100 100 / 20%) 0px 0.4rem 1.8rem 0px;
    animation: ${scale} 0.5s linear;
  }
  @media(max-width: 850px){
    display: none;
  }
`;
export const Info = styled.div`
  width: 50%;
  display: flex;
  z-index: 1;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 1.25rem;

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
  @media(max-width: 850px){
    width: 100%;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    top: 0;

    h2 {
      font-size: 1.3rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
  
`;
export const ContainerMovies = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 1.25rem;
  width: 100%;

  div{
     display: flex;
     flex-direction: column;
     max-width: 62.5rem;
     width: 100%;
     height: 100%;
     margin: 1.25rem 0;
  }
  h4{
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
  }

  iframe{
    border: none;
    height: 31.25rem;
  }
  @media(max-width: 850px){
    padding: 0.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    top: 0;

    iframe {
      height: 16rem;
    }
  }
`
