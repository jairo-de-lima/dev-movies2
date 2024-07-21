import styled from "styled-components";

export const Image = styled.div`
  min-height: 6.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 99;
  background-color: ${(props) =>
    props.changeBackground ? "rgb(0, 0, 0, 0.5)" : "transparent"};
    transition: background-color 0.8s ease-in-out;
    border-radius: 1rem;

  img {
    width: 25%;
  }
  @media(max-width: 850px) {
    display: flex;
    justify-content: flex-start;
    padding: 0 0.5rem;
    gap: 2rem;
  }
  
`;
export const Navbar = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  @media(max-width: 850px) {
    gap: 0.5rem;
  }
`;
export const Li = styled.li`
  font-weight: bold;
  cursor: pointer;
  position: relative;

  a {
    color: #f5f5f5;
    text-decoration: none;
    font-size: 1.5rem;
  }

  &::after {
    content: "";
    width: ${(props) => (props.isActive ? "100%" : 0)};
    height: 0.18rem;
    background-color: #189b20;
    position: absolute;
    bottom: -0.62rem;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
  @media(max-width: 850px){
    a {
      font-size: 1rem;
    }
    

  }
`;
