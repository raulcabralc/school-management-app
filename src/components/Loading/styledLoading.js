import styled from "styled-components";

export const ContainerLoading = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 36px;
  z-index: 1;

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  span {
    z-index: 2;
    padding: 7px 10px;
    border-radius: 7px;
    box-shadow: 0 0 15px 1px rgba(255, 255, 255, 0.1);
  }
`;
