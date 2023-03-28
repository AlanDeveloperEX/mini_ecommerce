import React, { ButtonHTMLAttributes } from "react";
import Loading from "../Loading";
import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  enabled?: boolean;
  customStyle?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  customStyle = "",
  enabled = true,
  ...rest
}) => {
  return (
    <Container
      type="button"
      enabled={enabled}
      customStyle={customStyle}
      disabled={loading}
      {...rest}
    >
      {loading ? <Loading size={1.5} /> : children}
    </Container>
  );
};

export default Button;
