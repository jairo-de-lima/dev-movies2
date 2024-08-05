import styled from "styled-components";

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed; // Change from absolute to fixed
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background: #000;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; // Change from fixed to relative
  padding: 0;
  border-radius: 0; // Remove border radius for full-screen effect
  max-width: none; // Remove max-width limitation

  iframe {
    border: none;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 850px) {
    width: 100%;
    padding: 0;
  }
`;

export const Close = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1000; // Ensure the close button is above the iframe
  &:hover {
    color: #f00; // Change color on hover for better visibility
  }
`;
