import { Container } from "../container/index.jsx";
import styled from "styled-components";
import planta from "../../assets/imgs/planta2.png";
import jardinagem from "../../assets/imgs/jardinagem2.png";

export const ExternalContainer = styled.div`
  background-color: #f5f5f5;
  padding-top: 4.01875rem;
`;

export const ContainerMain = styled(Container)`
  padding-bottom: 4.6875rem;
`;

export const User = styled.div`
  width: 100%;
  height: 9.1875rem;
  display: flex;
  justify-content: space-between;
  background: #ffffff padding-box;
  box-shadow: 0rem 0.1875rem 0.375rem #00000029;
  border-radius: 0.625rem;
  opacity: 1;
  padding-left: 1.25rem;
  padding-right: 3.125rem;
  margin-bottom: 2.1688rem;

  span {
    color: #f15a24;
  }

  h2 {
    align-self: center;
    text-align: left;
    font: bold 1.5rem/2rem;
    opacity: 1;
    color: #3b3a3a;
  }

  img {
    width: 18.8125rem;
    height: 12.8125rem;
    align-self: flex-end;
  }
`;

export const Curses = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const MyCurses = styled.div`
  width: 100%;
  max-width: 18.0625rem;
  height: 20.5625rem;
  opacity: 1;
  background: #208e76;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 8px;
  opacity: 1;
`;

export const CurseTitle = styled.div`
width:18.75rem;
    height: 4.25rem;
    padding-left: 0.75rem;
    padding-top: 1.125rem;
    padding-right: 6.375rem;
    border-radius: 8px;

    h3 {
      text-align: left;
      font: bold 1.5rem;
      color: #ffffff;
      opacity: 1;
      font-size: 24px;
    }
  }
`;

export const SliderDiv = styled.div`
  width: 100%;
  height: 79.4%;
`;

export const Slider = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${planta});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Gradient = styled.div`
  background: transparent linear-gradient(180deg, #00000000 0%, #000000 100%) 0%
    0% no-repeat padding-box;
  height: 100%;
  width: 100%;
`;

export const Slider2 = styled(Slider)`
  background-image: url(${jardinagem});
  background-repeat: no-repeat;
`;

export const CurseDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8.5rem;
  padding-left: 1rem;
  padding-right: 1.0625rem;
  padding-bottom: 2.75rem;

  div {
    width: "90%";
    height: "2.75rem";
  }

  h3 {
    text-align: left;
    font: bold 1.1875rem;
    color: #ffffff;
    opacity: 1;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.875rem;

  h2 {
    text-align: left;
    font-size: 0.875rem;
    font-weight: bold;
    color: #ffffff;
    opacity: 1;
  }

  a {
    background: #f15a24 0% 0% no-repeat padding-box;
    line-height: 2.1875rem;
    padding: 0 23px;
    text-align: center;
    font: bold 14px;
    color: #ffffff;
    opacity: 1;
    border-radius: 0.25rem;
  }
`;

export const Requests = styled.div`
  width: 100%;
  max-width: 44rem;
  background-color: #ffffff;
  box-shadow: 0rem 0.1875rem 0.375rem #00000029;
  border-radius: 0.5rem;
  opacity: 1;
  padding-top: 1.3125rem;
  padding-left: 1.625rem;
  padding-bottom: 1.8125rem;

  h3 {
    color: #f15a24;
    text-align: left;
    font: bold 16px;
    opacity: 1;
    font-size: 24px;
  }

  p {
    text-align: left;
    font: 1rem/1.375rem;
    color: #585858;
    opacity: 1;
    margin-top: 0.625rem;
    margin-bottom: 2.375rem;
  }
`;

export const Status = styled.div`
  display: grid;
  grid-template-columns: 11rem 11rem 11rem;
  grid-column-gap: 2.778125rem;
`;

export const Item = styled.div`
  h2 {
    text-align: left;
    font: bold 2.0625rem;
      color: #f15a24;
    }
  }

  h3 {
    text-align: left;
    font: bold 1.125rem/1.5rem;
    color: #f15a24;
  }

  p {
    text-align: left;
    font-size: 0.875rem;
    color: #585858;
    opacity: 1;
    margin-bottom: 0.5rem;
  }

  a{
    color:#4285F4;
    text-align: left;
    text-decoration: underline;
    font: bold 16px;
    color: #4285F4;
    opacity: 1;
  }

`;
