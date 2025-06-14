import styled from "styled-components";

import * as colors from "../../config/colors";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  gap: 7px;
  background: ${colors.primaryDarkBlack};
  color: ${colors.primaryGray};
  width: 100%;
  height: 100px;
  text-align: center;
  padding: 10px;
  border-top: 2.5px solid ${colors.primaryYellow};
  box-shadow: 0 0 15px 10px rgba(0, 0, 0, 0.6);

  a {
    color: ${colors.primaryGray};
    font-size: 20px;
  }

  a span {
    font-weight: 500;
    color: ${colors.primaryLightGray};
  }

  .links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .links a {
    font-size: 22px;
    color: ${colors.primaryLightGray};
  }
`;
