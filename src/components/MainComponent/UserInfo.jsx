import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoIosEye } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getDataFromAPI, getMetaDataFromAPI } from "../../utils/axios";
import { search } from "../../redux/action";
// import '../../../public/metadata/character'
const UserInfoContainer = styled.div`
  .icon {
    margin-right: 8px;
  }
`;

const GuideMessage = styled.div`
  width: 80%;
  font-size: 12px;
  margin-bottom: 10px;
  .InfoIcon {
    font-size: 12px;
    margin-right: 5px;
  }
`;

const UserInfoBox = styled.div`
  position: relative;
  display: flex;
  width: 1300px;
  height: 175px;
  border-width: 1px 1px 1px 4px;
  border-style: solid;
  border-color: #f2f2f2 #f2f2f2 #f2f2f2 #07f;
  background-image: url("https://tmi.nexon.com/img/background_flag_w.png");
  background-size: cover;
  background-position: 50%;
`;
const UserCharacter = styled.img`
  margin-top: 20px;
  width: 200px;
  height: 150px;
`;

const UserContent = styled.div``;

const UserName = styled.div`
  margin-top: 20px;
  font-size: 45px;
  font-weight: bold;
`;

const UserRecord = styled.span`
  vertical-align: middle;
  display: inline-block;
  margin-top: 20px;
  width: 100px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  color: #07f;
  border-style: solid;
  border-color: #07f;
  border-width: 0.7px 0.7px 0.7px 0.7px;
  cursor: pointer;

  &.individual {
    border-radius: 5px 0px 0px 5px;
    color: ${(props) => (props.tab === "개인전" ? "white" : "#07f")};
    background-color: ${(props) => (props.tab === "개인전" ? "#07f" : "white")};
  }
  &.team {
    border-radius: 0px 5px 5px 0px;
    color: ${(props) => (props.tab === "팀전" ? "white" : "#07f")};
    background-color: ${(props) => (props.tab === "팀전" ? "#07f" : "white")};
  }
  :hover {
    color: white;
    background-color: #07f;
  }
`;

const UserButton = styled.span`
  vertical-align: middle;
  display: inline-block;
  margin-top: 20px;
  margin-left: 10px;
  width: 82px;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  border: 0.7px solid #1f334a;
  border-radius: 15px;
  cursor: pointer;

  &.Refresh {
    margin-left: 20px;
  }
`;

const View = styled.div`
  position: absolute;
  right: 50px;
  top: 65px;
  .peopleNumber {
    margin-left: 20px;
  }
`;

const UserInfo = () => {
  const [image, setImage] = useState(null);
  const [tab, setTab] = useState("개인전");
  const [recordData, setRecordData] = useState([]);
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.data);

  useEffect(() => {
    if (Object.keys(userInfo).length >= 1) {
      setImage(
        `https://static.api.nexon.co.kr/kart/latest/character/${userInfo?.matches[0].matches[0].character}.png`
      );
    }
  }, [userInfo]);

  const clickIndividualButton = () => {
    setTab("개인전");
    getDataFromAPI(userInfo.nickName, 200, "개인전").then((result) =>
      dispatch(search(result.data))
    );
  };
  const clickTeamButton = () => {
    setTab("팀전");
    getDataFromAPI(userInfo.nickName, 200, "팀전").then((result) =>
      dispatch(search(result.data))
    );
  };
  return (
    <UserInfoContainer>
      <GuideMessage>
        <FontAwesomeIcon icon={faInfoCircle} className="InfoIcon" />
        카트라이더 매치데이터는 최근 1년치 데이터만 확인할 수 있습니다.
        {/* {recordData.length !== 0 ? recordData[0].matchType : null} */}
      </GuideMessage>
      <UserInfoBox>
        <UserCharacter
          // src={`../../public/metadata/character/${UserInfo?.matches[0].matches[0].character}`}
          src={image}
        />
        <UserContent>
          <UserName>
            {userInfo.nickName}
            {/* <img src="https://tmi.nexon.com//img/icon_l3.png" /> */}
          </UserName>
          <UserRecord
            className="individual"
            onClick={clickIndividualButton}
            tab={tab}
          >
            <FontAwesomeIcon icon={faUser} className="icon" />
            개인전
          </UserRecord>
          <UserRecord className="team" onClick={clickTeamButton} tab={tab}>
            <FontAwesomeIcon icon={faUsers} className="icon" />
            팀전
          </UserRecord>
          <UserButton className="Refresh">
            <FontAwesomeIcon icon={faArrowRotateRight} className="icon" />
            전적갱신
          </UserButton>
          <UserButton>
            <FontAwesomeIcon icon={faBell} className="icon" />
            신고하기
          </UserButton>
          <UserButton>
            <FontAwesomeIcon icon={faShareNodes} className="icon" />
            공유하기
          </UserButton>
        </UserContent>
        <View>
          <IoIosEye />
          페이지 뷰<div className="peopleNumber">1,500</div>
        </View>
      </UserInfoBox>
    </UserInfoContainer>
  );
};

export default UserInfo;
