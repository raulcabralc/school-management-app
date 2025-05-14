import styled from "styled-components";

import {
  primaryYellow,
  primaryBlack,
  primaryDarkBlack,
} from "../../config/colors";

export const Nav = styled.nav`
  background: ${primaryYellow};
  height: 80px;
  display: flex;
  justify-content: center;
  gap: 30px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);

  .links {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-size: 1.2em;
    font-weight: 500;
    margin-left: 80px;
    margin-right: 80px;
  }

  .links .login-register,
  .links .navigation {
    display: flex;
    gap: 20px;
  }

  .navigation a {
    position: relative;
  }

  .navigation a::after {
    content: "|";
    margin-left: 20px;
  }

  .navigation a:last-child::after {
    content: "";
  }

  .links .login-register a {
    background: ${primaryBlack};
    color: ${primaryYellow};
    padding: 5px;
    width: 130px;
    text-align: center;
    border-radius: 5px;
    font-size: 1.1em;
    font-weight: 500;
    box-shadow: 0 0 5px ${primaryBlack};
    transition: all ease-in-out 0.15s;
  }

  .links .login-register a:hover {
    background: ${primaryDarkBlack};
    color: white;
  }
`;
