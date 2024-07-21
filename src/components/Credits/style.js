import styled from "styled-components";


export const Title = styled.h4`
  color: #fff;
  font-size: 1.75rem;
  font-weight: 700;
  @media(max-width: 850px){
    font-size: 1.3rem;
  }
`;

export const Container = styled.div`
  display: flex;
  margin-top: 1.8rem;
  gap: 0.6rem;

  div {
    display: flex;
    flex-direction: column;
  }
  p {
    color: #fff;
  }
  img {
    height: 12.5rem;
    border-radius: 0.5rem;
  }
  @media(max-width: 850px){
    img{
      height: 6rem;
    }

  }
`;

