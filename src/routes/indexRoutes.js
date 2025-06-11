import React from "react";
import { Switch } from "react-router-dom";

import MyRoute from "./MyRoute";

import Login from "../pages/Login/indexLogin";
import Page404 from "../pages/Page404/index404";
import AlunoInd from "../pages/Aluno Individual/indexAlunoInd";
import Alunos from "../pages/Alunos/indexAlunos";
import Fotos from "../pages/Fotos/indexFotos";
import Register from "../pages/Cadastro/indexRegister";
import User from "../pages/User/indexUser";

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Alunos} isClosed={false} />
      <MyRoute exact path="/login" component={Login} isClosed={false} />
      <MyRoute exact path="/register" component={Register} isClosed={false} />
      <MyRoute exact path="/user" component={User} isClosed />
      <MyRoute exact path="/aluno/:id/edit" component={AlunoInd} isClosed />
      <MyRoute exact path="/aluno/:id/delete" component={AlunoInd} isClosed />
      <MyRoute exact path="/aluno/" component={AlunoInd} isClosed />
      <MyRoute exact path="/fotos/:id" component={Fotos} isClosed />
      <MyRoute exact path="/registered" registered />
      <MyRoute exact path="/loggedin" loggedin />
      <MyRoute exact path="/logout" logout />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
