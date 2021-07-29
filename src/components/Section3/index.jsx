import React from "react";
import * as S from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import styles from "./styles.module.css";

import SwiperCore, { Pagination } from "swiper/core";

SwiperCore.use([Pagination]);

export default function Section3() {
  return (
    <S.ContainerMain>
      <S.WrapperTitle>
        <h3>Todos os nossos cursos</h3>
        <p>Amplie seus conhecimentos participando de nossos cursos!</p>
      </S.WrapperTitle>

      <div className={styles.SliderWrapper}>
        <Swiper
          slidesPerView={4}
          spaceBetween={3}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.7,
              spaceBetween: 16,
            },
            600: {
              slidesPerView: 2.7,
              spaceBetween: 15,
            },
            900: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          className={styles.mySwiper}
        >
          <SwiperSlide>
            <S.Card>
              <S.Image>
                <S.Gradient>
                  <S.WrapperCurseTitle>
                    <h3>Curso de plantação Caseira</h3>
                  </S.WrapperCurseTitle>
                </S.Gradient>

                <S.WrapperMatricula>
                  <h4>Carga horária de 10h00</h4>

                  <S.WrapperButton>
                    <a>Saiba mais</a>
                    <a>Matricule-se</a>
                  </S.WrapperButton>
                </S.WrapperMatricula>
              </S.Image>
            </S.Card>
          </SwiperSlide>

          <SwiperSlide>
            <S.Card>
              <S.Image2>
                <S.Gradient>
                  <S.WrapperCurseTitle>
                    <h3>Nome do curso</h3>
                  </S.WrapperCurseTitle>
                </S.Gradient>

                <S.WrapperMatricula>
                  <h4>Carga horária de 08h00</h4>

                  <S.WrapperButton>
                    <a>Saiba mais</a>
                    <a>Matricule-se</a>
                  </S.WrapperButton>
                </S.WrapperMatricula>
              </S.Image2>
            </S.Card>
          </SwiperSlide>

          <SwiperSlide>
            <S.Card>
              <S.Image3>
                <S.Gradient>
                  <S.WrapperCurseTitle>
                    <h3>nome do curso</h3>
                  </S.WrapperCurseTitle>
                </S.Gradient>

                <S.WrapperMatricula>
                  <h4>Carga horária de 15h00</h4>

                  <S.WrapperButton>
                    <a>Saiba mais</a>
                    <a>Matricule-se</a>
                  </S.WrapperButton>
                </S.WrapperMatricula>
              </S.Image3>
            </S.Card>
          </SwiperSlide>

          <SwiperSlide>
            <S.Card>
              <S.Image4>
                <S.Gradient>
                  <S.WrapperCurseTitle>
                    <h3>Nome do curso</h3>
                  </S.WrapperCurseTitle>
                </S.Gradient>

                <S.WrapperMatricula>
                  <h4>Carga horária de 07h00</h4>

                  <S.WrapperButton>
                    <a>Saiba mais</a>
                    <a>Matricule-se</a>
                  </S.WrapperButton>
                </S.WrapperMatricula>
              </S.Image4>
            </S.Card>
          </SwiperSlide>

          <SwiperSlide>
            <S.Card>
              <S.Image>
                <S.Gradient>
                  <S.WrapperCurseTitle>
                    <h3>Curso de plantação Caseira</h3>
                  </S.WrapperCurseTitle>
                </S.Gradient>

                <S.WrapperMatricula>
                  <h4>Carga horária de 10h00</h4>

                  <S.WrapperButton>
                    <a>Saiba mais</a>
                    <a>Matricule-se</a>
                  </S.WrapperButton>
                </S.WrapperMatricula>
              </S.Image>
            </S.Card>
          </SwiperSlide>
        </Swiper>
      </div>
    </S.ContainerMain>
  );
}
