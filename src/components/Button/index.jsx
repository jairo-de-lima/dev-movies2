import { ButtonRed, ButtonWhite, ButtonArrow, ButtonArrow2 } from "./style";

function Button({ children, red, arrow, arrow2, ...rest }) {
  return (
    <>
      {red ? (
        <ButtonRed {...rest}>{children}</ButtonRed>
      ) : arrow ? (
        <ButtonArrow {...rest}>{children}</ButtonArrow>
      ) : arrow2 ? (
        <ButtonArrow2 {...rest}>{children}</ButtonArrow2>
      ) : (
        <ButtonWhite {...rest}>{children}</ButtonWhite>
      )}
    </>
  );
}

export default Button;
