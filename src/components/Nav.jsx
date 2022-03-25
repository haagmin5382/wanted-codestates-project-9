import React, { useState } from "react";
import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { search, getMatchList } from "../redux/action";
import { getDataFromAPI, getMatchDataFromAPI } from "../utils/axios";
const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .flex {
    display: flex;
    align-items: center;
  }
  .HomePage {
    font-size: 12px;
    color: #6c7a89;
    cursor: pointer;
  }
`;
const TopConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  height: 48px;
`;
const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #005fcc;
  color: white;
  width: 100%;
  height: 55px;

  .Menu {
    display: flex;
    margin: 0 auto;
    > li {
      position: relative;
      list-style: none;
      width: 80px;
      margin-right: 40px;
      line-height: 55px;
      text-align: center;
      font-weight: bold;
      cursor: pointer;
      :hover {
        color: white;
        ::after {
          position: absolute;
          bottom: 0px;
          left: 0px;
          width: 100%;
          content: "";
          border-bottom: 4px solid white;
        }
      }
    }
  }
  .Search {
    border-bottom: 1px solid #7fafe5;
    :hover {
      cursor: pointer;
      border-bottom: 1px solid white;
    }
  }
`;

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

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartLogo = "https://tmi.nexon.com/img/assets/logo_kart.png";
  const tmiLogo = "https://tmi.nexon.com/img/assets/tmi_logo_default_b.svg";
  const [nickname, setNickname] = useState("");
  const MatchData = useSelector((state) => state.userData);

  const inputNickname = (e) => {
    setNickname(e.target.value);
  };

  const searchNickname = () => {
    getDataFromAPI(nickname).then((data) => {
      dispatch(search(data.data));
    });
  };
  return (
    <NavContainer>
      <TopConatiner>
        <div className="Menu">
          <img src={cartLogo} />
          <IoMdArrowDropdown size="24" color="silver" />
          <img src={tmiLogo} />
        </div>
        <a className="HomePage">카트라이더 홈페이지 바로가기</a>
      </TopConatiner>
      <MenuContainer>
        <ul className="Menu">
          <li onClick={() => navigate("/")}>홈</li>
          <li onClick={() => navigate("/ranking")}>랭킹</li>
          <li>카트</li>
          <li>트랙</li>
        </ul>
        <div className="Menu Search">
          <Search placeholder="닉네임 검색" onChange={inputNickname} />
          <IoMdSearch size="24px" color="#7fafe5" onClick={searchNickname} />
        </div>
      </MenuContainer>
    </NavContainer>
  );
};

export default Nav;
