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
    height: 150px;
    background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));

  }
`;
export const Box = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  max-width: 1500px;

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
`;
export const Image = styled.div`
  z-index: 2;
  img {
    width: 400px;
    border-radius: 1.5rem;
    box-shadow: 16px 16px 12px 4px rgba(66,63,63,0.71);
    animation: ${scale} 0.6s ease-in-out normal;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`
