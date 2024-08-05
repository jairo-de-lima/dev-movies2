import {
  ButtonRed,
  ButtonWhite,
  ButtonArrow,
  ButtonArrow2,
  ButtonWatch,
} from "./style";

function Button({ children, red, arrow, arrow2, watch, ...rest }) {
  return (
    <>
      {red ? (
        <ButtonRed {...rest}>{children}</ButtonRed>
      ) : arrow ? (
        <ButtonArrow {...rest}>{children}</ButtonArrow>
      ) : arrow2 ? (
        <ButtonArrow2 {...rest}>{children}</ButtonArrow2>
      ) : watch ? (
        <ButtonWatch {...rest}>{children}</ButtonWatch>
      ) : (
        <ButtonWhite {...rest}>{children}</ButtonWhite>
      )}
    </>
  );
}

export default Button;
