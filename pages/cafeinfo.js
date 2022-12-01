import styled from "styled-components";
import { useRouter } from "next/router";

import CafeDetail from "../styles/text/CafeDetail";
import CafeTitle from "../styles/text/CafeTitle";
import Wrapper from "../styles/boxlayout/Wrapper";
import Text from "../styles/text/Text";
import OrderButton from "../components/Order/OrderButton";

//OrderButton 컴포넌트에서 정의했던 거 쓰면 아예 화면에서 안 보임 ㅋㅋ

//아 근데 여기다가 복붙했는데 div태그로 스타일드 컴포넌트 한 거 또 안 먹음
// const OrderButtonBox = styled.div`
//     position: relative;
//     color: red;
//     display: flex;
//     justify-content: center;
//     width: 326px;
//     height: 43px;
    
//     top: 170px;
//     left: 50%; transform: translate(-50%, -50%); 

//     // background-color: ${props => props.isSelect ? '#9E6027' : '#9E602785'};
//     border-radius: 20px;
// `;
// const OrderText = styled.p`
//     position: absolute;
//     text-align: center;
//     line-height: 14px;
//     color: white;

    
//     font-size = 18px;
//     font-weight = 600;
// `;


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

    const router =  useRouter();
    const onClickHandler = () => {
        router.push('/order/menu');
    };

    return (
        <Wrapper>
            <CafeImg src="/images/cafe1.png" />
            <CafeTitle cafename="카페 C" cafeinfo="블렌디드와 수박주스가 맛있는 카페"/>
            <MiddleBar top="100px"/>
            <CafeDetail time="월화수목금토일 10:00 - 20:00" holiday="없음" phoneNum="02-어쩌구-저쩌구" address="대충 성북구"/>
            <MiddleBar top="60px" />
            <Text size="20px" weight="600" color="black" top="630px" left="30px">현재 잔액</Text>
            <Text size="20px" weight="600" color="#9E6027" top="630px" left="330px">4500원</Text>
            <div onClick={onClickHandler} style={{
                position: 'relative',
                backgroundColor: '#9E6027',
                textAlign: 'center',
                lineHeight: '43px',
                width: '326px',
                height: '43px',
                borderRadius: '20px',
                color: 'white',
                fontSize: '16px',
                // fontWeight: '600',

                top: '180px',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}>
                주문하기
            </div>
        </Wrapper>
    );
}

export default Cafeinfo;
