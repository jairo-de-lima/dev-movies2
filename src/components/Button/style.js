import styled, { css } from "styled-components";

const buttonStyle = css`
  border: 0.18rem solid #fff;
  background: transparent;
  color: #fff;
  border-radius: 1.8rem;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  position: relative;
  margin: 0.5rem;

  &:hover {
    background: #fff;
    color: #ff0000;
  }
  @media(max-width: 850px){
   font-size: 1rem;
   height: 3rem;
   padding: 0.2rem;
   margin: 0.1rem;
  }
`;

export const ButtonWhite = styled.button`
  ${buttonStyle}
`;

export const ButtonRed = styled.button`
  ${buttonStyle}
  background: #ff0000;
  border: 0.25rem solid transparent;
  box-shadow: 0px 0px 0.43rem 0.5rem rgb(255 0 0 / 30%);

  &:hover {
    box-shadow: 0px 0px 0.43rem 1rem rgb(255 0 0 / 30%);
    background: #ff0000;
    color: #fff;
  }
`;

export const ButtonArrow = styled.button`
  ${buttonStyle}
  &::after {
    content: "";
    color: #fff;
    position: absolute;
    top: 50%;
    right: 0.6rem;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0.6rem 0 0.6rem 0.6rem;
    border-color: transparent transparent transparent #fff;
  }
  @media(max-width: 850px){
    padding-right: 1.5rem;
  }
  
`;

export const ButtonArrow2 = styled.button`
  ${buttonStyle}
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0.6rem 0.6rem 0.6rem 0;
    border-color: transparent #fff transparent transparent;
  }
  @media(max-width: 850px){
    padding-right: 1.5rem;
  }
`;
