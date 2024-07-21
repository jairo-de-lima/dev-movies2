import styled, { keyframes } from "styled-components";
const scale = keyframes`
    from{
        transform: scale(0);
        }
        to{
            transform: scale(1);
        }
`;

export const Background = styled.div`
  background-image: url(${(props) => props.img});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  &::after{
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 9.37rem;
    background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));

  }
`;
export const Box = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  max-width: 93.75rem;

`

export const Description = styled.div`
  z-index: 2;
  padding: 3rem;
  width: 50%;

  h1 {
    font-size: 5rem;
    font-weight: 700;
    color: #fff;
  }
  p {
    font-size: 1.3rem;
    font-weight: 500;
    color: #fff;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  @media(max-width: 850px){
    width: 100%;
    padding: 1.5rem;
    filter: brightness(80%);

    h1{
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;
export const Image = styled.div`
  z-index: 2;
  img {
    width: 25rem;
    border-radius: 1.5rem;
    box-shadow: 1rem 1rem 0.75rem 0.25rem rgba(66,63,63,0.71);
    animation: ${scale} 0.6s ease-in-out normal;
  }
  @media(max-width: 850px){
    display: none;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 1,25rem;
  margin-top: 1.87rem;
`
