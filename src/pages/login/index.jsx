import React from "react";
import { Container } from "../../components/container";
import Header from "../../components/Header";
import * as S from "./styles";
import LoginImg from "../../assets/imgs/login.svg";
import OkIcon from "../../assets/imgs/ok.svg";

function Login() {
  return (
    <>
      <Header />
      <div style={{ backgroundColor: "#F5F5F5" }}>
        <S.ContainerMain>
          <S.WrapperImage>
            <img src={LoginImg} alt="" />
            <S.Text1>
              <img src={OkIcon} alt="" />
              <span>Abra solicitações</span>
            </S.Text1>
            <S.Text2>
              <img src={OkIcon} alt="" />
              <span>Reclamações e mais…</span>
            </S.Text2>
            <S.Text3>
              <img src={OkIcon} alt="" />
              <span>Denúncias</span>
            </S.Text3>
          </S.WrapperImage>

          <S.LoginBox>
            <p>
              Para acessar o portal SIGAS <br /> entre com seu login e senha
            </p>

            <S.Form>
              <S.WrapperInput>
                <label>Login</label>
                <input required></input>
              </S.WrapperInput>

              <S.WrapperInput>
                <S.WrapperForgotPassword>
                  <label>Senha</label>
                  <a href="">Esqueceu sua senha?</a>
                </S.WrapperForgotPassword>
                <input required type="password"></input>
              </S.WrapperInput>

              <S.Button>Entrar</S.Button>

              <span>
                Não tem uma conta? <a href="">Cadastre-se</a>
              </span>
            </S.Form>
          </S.LoginBox>
        </S.ContainerMain>
      </div>
    </>
  );
}

export default Login;
