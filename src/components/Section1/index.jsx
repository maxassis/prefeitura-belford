import React from "react";
import { Container } from "../container/index.jsx";
import * as S from "./styles.jsx";
import user from "../../assets/imgs/user.svg";

export default function Section1() {
  return (
    <S.ExternalContainer>
      <Container>
        <S.User>
          <h2>
            Olá <span>Usuário,</span> <br /> Bem-vindo ao portal da SEMA!
          </h2>
          <img src={user} alt="user" />
        </S.User>

        <S.Curses>
          <S.MyCurses></S.MyCurses>

          <S.Requests>
            <h3>Minhas solicitações (4)</h3>
            <div style={{ width: "26.8125rem" }}>
              <p>
                Acompanhe aqui o andamento de todas as suas solicitações aberta
                da SEMA
              </p>
            </div>
            <S.Status>
              <S.Item>
                <h2>1</h2>
                <h3>Pendente</h3>
                <p>Você possui uma solicitação pendente!</p>
                <a href="#">ver todas</a>
              </S.Item>
              <S.Item>
                <h2 style={{ color: "#585858" }}>1</h2>
                <h3 style={{ color: "#585858" }}>Processando</h3>
                <p>Envie novas informações ou aguarde uma resposta</p>
                <a href="#">ver todas</a>
              </S.Item>
              <S.Item>
                <h2 style={{ color: "#585858" }}>1</h2>
                <h3 style={{ color: "#585858" }}>Finalizada</h3>
                <p>Envie novas informações ou aguarde uma resposta</p>
                <a href="#">ver todas</a>
              </S.Item>
            </S.Status>
          </S.Requests>
        </S.Curses>
      </Container>
    </S.ExternalContainer>
  );
}
