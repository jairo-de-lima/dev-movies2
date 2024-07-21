import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  img {
        margin-top: 1.2rem;
        width: 18.75rem;
        height: 100%;
        border-radius: 1.8rem;
        box-shadow: 0.8rem 1.2rem 0px 0px rgba(0,0,0,0.5);
        cursor: pointer;
    
  }
  h3 {
    color: #fff;
    margin-top: 0.9rem;
  }

  @media(max-width: 850px){
   img {
    margin-top: 0.6rem;
    width: 8rem;
    border-radius: 1rem;
    box-shadow: 0.4rem 1rem 0px 0px rgba(0,0,0,0.5);
    }

    h3 {
      font-size: 0.8rem;
    }

  }
`;
