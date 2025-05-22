import React from "react";
import { Route, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import * as actions from "../store/modules/auth/actions";

import PropTypes from "prop-types";

export default function MyRoute({
  component: Component,
  isClosed,
  logout,
  loggedin,
  ...rest
}) {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (isClosed && !isLoggedIn) {
    toast.info("Realize Login para acessar");

    return (
      <Redirect
        to={{ pathname: "/login", state: { prevPath: rest.location.pathname } }}
      />
    );
  }

  if (logout) {
    dispatch(actions.loginFailure());
    toast.info("Usuário deslogado");

    return <Redirect to={{ pathname: "/" }} />;
  }

  if (loggedin) {
    toast.success("Login efetuado!");

    return <Redirect to={{ pathname: "/" }} />;
  }

  return <Route {...rest} component={Component} />;
}

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};
