import styled from "styled-components";

import * as colors from "../../config/colors";

export const Nav = styled.nav`
  background: ${colors.primaryYellow};
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
    font-weight: 600;
    font-size: 26px;
    padding: 5px;
    border-radius: 5px;
    border: 3px solid ${colors.primaryBlack};
    transition: all ease-in-out 0.15s;
  }

  .navigation a:hover {
    box-shadow: 0 0 15px 3px rgba(0, 0, 0, 0.2);
    transform: scale(102%);
  }

  .links .login-register a.a-button {
    background: ${colors.primaryBlack};
    color: ${colors.primaryYellow};
    padding: 5px;
    width: 130px;
    text-align: center;
    border-radius: 5px;
    font-size: 1.1em;
    font-weight: 500;
    box-shadow: 0 0 5px ${colors.primaryBlack};
    transition: all ease-in-out 0.15s;
  }

  .links .login-register a.a-button:hover {
    background: ${colors.primaryDarkBlack};
    color: white;
  }

  .logged {
    margin: auto;
    color: ${colors.primaryLightBlack};
    padding: 5px;
    border-radius: 5px;
    transition: all ease-in-out 0.15s;
  }

  .logged:hover {
    color: ${colors.primaryLighterBlack};
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
  }

  .logout {
    background: ${colors.primaryBlack} !important;
  }

  .logout:hover {
    background: ${colors.primaryDarkDanger} !important;
  }

  .user {
    color: ${colors.primaryDarkBlack};
    font-weight: 600;
  }
`;
