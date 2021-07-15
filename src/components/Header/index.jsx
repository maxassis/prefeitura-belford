import React from "react";
import * as S from "./styles";
import { Container } from "../container";
import Logo from "../../assets/logo.jpg";

export default function Header() {
  return (
    <S.ExternalContainer>
      <Container>
        <S.WrapperMain>
          <S.WrapperLogo>
            <S.Img src={Logo} alt="logo" />

            <S.List>
              <li>Página inicial</li>
              <li>Solicitação</li>
              <li>Cursos</li>
            </S.List>
          </S.WrapperLogo>

          <S.SecondList>
            <li>
              <S.Icon />
            </li>
            <li>
              <span>Área do usuário</span>
            </li>
            <li>
              <S.ArrowIcon />
            </li>
          </S.SecondList>
        </S.WrapperMain>
      </Container>
    </S.ExternalContainer>
  );
}
