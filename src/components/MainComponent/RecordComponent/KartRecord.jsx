import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Kart } from "../../../constants/Kart";

const KartRecordContainer = styled.div`
  margin-left: 15px;
`;

const KartRecordTitle = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const KartType = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  width: 40px;
  height: 20px;
  text-align: center;
`;

const KartName = styled.div`
  margin-left: 20px;
  line-height: 20px;
`;

const KartRecordContent = styled.div`
  display: flex;
`;

const KartImg = styled.img`
  width: 100px;
  height: 100px;
  padding-right: 20px;

  border-right: 1px solid black;
`;

const TrackList = styled.ul`
  list-style: none;
  margin-top: 0px;
  li {
    margin-bottom: 5px;
  }
`;

const KartRecord = ({ kartInfo }) => {
  const kartname = Kart.filter((obj) => obj.id === kartInfo[0]);
  const [image, setImage] = useState("");

  useEffect(() => {
    setImage(
      `https://static.api.nexon.co.kr/kart/latest/kart/${kartInfo[0]}.png`
    );
  }, []);
  console.log(kartInfo[0]);
  return (
    <KartRecordContainer>
      <KartRecordTitle>
        <KartType>일반</KartType>
        <KartName>{kartname[0].name}</KartName>
      </KartRecordTitle>
      <KartRecordContent>
        <KartImg src={image} />
        <TrackList>
          <li>코리아 제주 해오름</li>
          <li>코리아 제주 해오름</li>
          <li>코리아 제주 해오름</li>
          <li>코리아 제주 해오름</li>
        </TrackList>
      </KartRecordContent>
    </KartRecordContainer>
  );
};

export default KartRecord;
