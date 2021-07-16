import styled from "styled-components";

export const ExternalContainer = styled.div`
  background-color: #f5f5f5;
  padding-top: 4.01875rem;
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
  border: 0.0625rem solid red;
`;

export const Requests = styled.div`
  width: 100%;
  max-width: 44rem;
  border: 0.0625rem solid red;
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
  border: 1px solid red;
`;

export const Item = styled.div`
  h2 {
    text-align: left;
    font: bold 33px/24px;
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
