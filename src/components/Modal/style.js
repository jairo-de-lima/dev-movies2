import styled from "styled-components";

export const Background = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const Container = styled.div`
    background: #000;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    padding: 2rem;
    max-width: 1200px;
    border-radius: 1rem;

    iframe {
        border: none;
    }

`
export const Close = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  width: 1.5rem;
  margin: 0.5rem;
  font-size: 1rem;
`


