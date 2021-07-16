import React from "react";
import * as S from "./styles.jsx";
import { Container } from "../container";
import alert from "../../assets/imgs/alert.svg";
import diploma from "../../assets/imgs/diploma.svg";
import tree from "../../assets/imgs/tree.svg";
import carta from "../../assets/imgs/carta.svg";

export default function Section2() {
  return (
    <S.ContainerMain>
      "
      <Container style={{ paddingBottom: "5.6013rem" }}>
        <S.Title>
          <div>
            <h2>Nova solicitação</h2>
            <p>
              Abra solicitações de reparos, capinagens, licenciamento, denúncias
              e entre outros serviços!
            </p>
          </div>
        </S.Title>

        <S.WrapperCards>
          <S.Card>
            <img src={alert} alt="alert" />
            <span>Denúncia</span>

            <S.Text>
              <p>
                Faça uma denúncia ambiental, como um descarte irregular de lixo
                na sua rua ou rio.
              </p>
            </S.Text>
          </S.Card>
          <S.Card>
            <img src={diploma} alt="alert" />
            <span>Licenciamento ambiental</span>

            <S.Text>
              <p>
                Dê entrada no processo de licenciamentos ambiental de seus
                Projetos
              </p>
            </S.Text>
          </S.Card>
          <S.Card>
            <img src={tree} alt="alert" />
            <span>Poda em arvore</span>

            <S.Text>
              <p>
                Tem alguma arvore bloqueando a entrada da sua casa ou loja, que
                precisa ser podada? Solicite aqui.
              </p>
            </S.Text>
          </S.Card>
        </S.WrapperCards>

        <S.WrapperGreen>
          <S.WrapperContent>
            <img src={carta} alt="carta" />
            <S.WrapperText>
              <h3>Precisa de outros serviços ?</h3>
              <span>
                Clique aqui e conheça todas as solicitações de serviços
                oferecidas
              </span>
            </S.WrapperText>
          </S.WrapperContent>
          <S.SolicitacionButton href="#">
            Abrir solicitação
          </S.SolicitacionButton>
        </S.WrapperGreen>
      </Container>
    </S.ContainerMain>
  );
}
