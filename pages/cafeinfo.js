import styled from "styled-components";

import CafeDetail from "../styles/text/CafeDetail";
import CafeTitle from "../styles/text/CafeTitle";
import Wrapper from "../styles/boxlayout/Wrapper";
import Text from "../styles/text/Text";
import OrderButton from "../components/Order/OrderButton";

const CafeImg = styled.img`
    width: 450px;
    height: 360px;
`;

const MiddleBar = styled.div`
    border: 1px solid #EFEFEF;
    position: relative;

    top: ${props => props.top};
`;

function Cafeinfo({ left }) {

    return (
        <Wrapper>
            <CafeImg src="/images/cafe1.png" />
            <CafeTitle cafename="카페 C" cafeinfo="블렌디드와 수박주스가 맛있는 카페"/>
            <MiddleBar top="100px"/>
            <CafeDetail time="월화수목금토일 10:00 - 20:00" holiday="없음" phoneNum="02-어쩌구-저쩌구" address="대충 성북구"/>
            <MiddleBar top="60px" />
            <Text size="20px" weight="600" color="black" top="630px" left="30px">현재 잔액</Text>
            <Text size="20px" weight="600" color="#9E6027" top="630px" left="330px">4500원</Text>
            <OrderButton urlpath="/order/menu"/>
        </Wrapper>
    );
}

export default Cafeinfo;
