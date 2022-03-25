import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Container = styled.div`
  line-height: 50vh;
  align-items: center;
  text-align: center;
  font-size: 55px;
  color: silver;
`;
const NoInput = () => {
  return (
    <Container>
      <FontAwesomeIcon icon={faMagnifyingGlass} /> 닉네임을 검색하세요
    </Container>
  );
};

export default NoInput;
