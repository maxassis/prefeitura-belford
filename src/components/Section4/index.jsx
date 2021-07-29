import React from "react";
import * as S from "./styles.jsx";
import face from "../../assets/imgs/face.svg";

export default function Section4() {
  return (
    <S.ExternalContainer>
      <S.ContainerMain>
        <S.Title>
          <h3>Nossas redes sociais</h3>
          <p>
            Não perca mais nenhuma novidade. Siga a SEMA nas rede sociais e
            fique por dentro de tudo o que acontece
          </p>
        </S.Title>
        <img src={face} alt=" face icon" />
      </S.ContainerMain>
    </S.ExternalContainer>
  );
}
