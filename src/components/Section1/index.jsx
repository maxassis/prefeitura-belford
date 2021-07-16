import React from "react";
import * as S from "./styles.jsx";
import user from "../../assets/imgs/user.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";
import "./styles.css";
SwiperCore.use([Pagination]);

export default function Section1() {
  return (
    <S.ExternalContainer>
      <S.ContainerMain>
        <S.User>
          <h2>
            Olá <span>Usuário,</span> <br /> Bem-vindo ao portal da SEMA!
          </h2>
          <img src={user} alt="user" />
        </S.User>

        <S.Curses>
          <S.MyCurses>
            <S.CurseTitle>
              <h3>Meus cursos (2)</h3>
            </S.CurseTitle>

            <Swiper pagination={true} className="mySwiper">
              <SwiperSlide>
                <S.Slider>
                  <S.Gradient>
                    <S.CurseDescription>
                      <div>
                        <h3>Curso de plantação Caseira</h3>
                      </div>
                      <S.ButtonDiv>
                        <h2>35% concluído</h2>
                        <a href="#">Continuar</a>
                      </S.ButtonDiv>
                    </S.CurseDescription>
                  </S.Gradient>
                </S.Slider>
              </SwiperSlide>
              <SwiperSlide>
                <S.Slider2>
                  <S.Gradient>
                    <S.CurseDescription>
                      <div style={{ width: "90%" }}>
                        <h3>Curso de apicultura</h3>
                      </div>
                      <S.ButtonDiv>
                        <h2>85% concluído</h2>
                        <a href="#">Continuar</a>
                      </S.ButtonDiv>
                    </S.CurseDescription>
                  </S.Gradient>
                </S.Slider2>
              </SwiperSlide>
            </Swiper>
          </S.MyCurses>

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
                <h2 style={{ color: "#585858" }}>2</h2>
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
      </S.ContainerMain>
    </S.ExternalContainer>
  );
}
