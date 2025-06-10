import React from "react";
import propTypes from "prop-types";

import { ContainerLoading } from "./styledLoading";

export default function Loading({ isLoading }) {
  return isLoading ? (
    <ContainerLoading>
      <div></div>
      <span className="loading-text">Carregando...</span>
    </ContainerLoading>
  ) : (
    <></>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: propTypes.bool,
};
