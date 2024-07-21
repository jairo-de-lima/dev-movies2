import styled, { css } from "styled-components";

const buttonStyle = css`
  border: 3px solid #fff;
  background: transparent;
  color: #fff;
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  position: relative;

  &:hover {
    background: #fff;
    color: #ff0000;
  }
`;

export const ButtonWhite = styled.button`
  ${buttonStyle}
`;

export const ButtonRed = styled.button`
  ${buttonStyle}
  background: #ff0000;
  border: 4px solid transparent;
  box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

  &:hover {
    box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%);
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
    right: 10px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent #fff;
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
    border-width: 10px 10px 10px 0;
    border-color: transparent #fff transparent transparent;
  }
`;
