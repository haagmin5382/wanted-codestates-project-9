import React from "react";
import { IoMdSearch } from "react-icons/io";
import styled from "styled-components";
const Search = styled.input`
  outline: none;
  border: none;

  color: #7fafe5;
  font-size: bold;
  background-color: #005fcc;
  padding: 10px;
  width: 230px;

  ::placeholder {
    color: #7fafe5;
  }
  :hover {
    ::placeholder {
      color: white;
    }
  }
`;
const Input = () => {
  return (
    <div>
      <Search placeholder="닉네임 검색" />
      <IoMdSearch size="24px" color="#7fafe5" />
    </div>
  );
};

export default Input;
