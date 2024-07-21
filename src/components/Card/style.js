import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  img {
        margin-top: 20px;
        width: 300px;
        height: 100%;
        border-radius: 30px;
        box-shadow: 14px 20px 0px 0px rgba(0,0,0,0.5);
        cursor: pointer;
    
  }
  h3 {
    color: #fff;
    margin-top: 15px;
  }
`;
