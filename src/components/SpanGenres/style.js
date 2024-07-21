import styled from "styled-components";




export const Container = styled.div`
    display: flex;
    margin-top: 1,25rem;
    gap: 0.6rem;

    span {
      padding: 0.5rem 1.12rem;
      border: 0.1rem solid #fff;
      border-radius: 1.8rem;
      font-size: 1rem;
      font-weight: 600;
      background-color: #0f0f0f;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @media(max-width: 850px){
      margin-top: 1rem;

    span {
      border-radius: 1rem;
      font-size: 0.8rem;
      padding: 0rem 0.8rem;
    }
  }
`;

