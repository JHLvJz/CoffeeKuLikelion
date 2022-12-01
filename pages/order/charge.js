import styled from "styled-components";
import { useRouter } from "next/router";

import ShadowBox from "../../styles/boxlayout/ShadowBox";
import Text from "../../styles/text/Text";
import OrderButtonBox from "../../components/Order/OrderBox";
import OrderText from "../../components/Order/OrderText";
import ButtonDict from "../../components/Order/DollarButton";

// const Amount = styled.div`
//     width: 73px;
//     height: 43px;
//     background: rgba(217, 217, 217, 0.44);
//     border-radius: 10px;

//     text-align: center;
//     line-height: 43px;
//     font-size: 15px;
//     font-weight:  400;
// `

const Icon = styled.img`
    width: 17px;
    height: 17px;
    position: absolute;

    top: 40px;
    left: 15px;
`

//예시
const Card = styled.img`
    width: 300px;
    height: 270px;
    position: absolute;

    top: 60px;
    left: 60px;
`

function Charge() {
    const router =  useRouter();
    const onClickHandler = () => {
        router.push('/order/menu');
    };
    
        let cafename = '카페 C';
        let left = 4500

        return(
            <>
                <ShadowBox height="380px" style={{ display: 'flex', justifyContent: 'center'}}>
                    <Icon onClick={onClickHandler} src="/images/backarrow.png"></Icon>
                    {/* 여기 픽셀 고친 거 다 바꿔야함 */}
                    <Text size="18px" weight="600" top="20px" left="180px" color="black">충전하기</Text>
                    <Card src="/images/cardExample.png" />
                    {/* 페이먼츠 넣기 전 예시 */}
                    <div style={{ display: 'flex', justifyContent: 'center', top: '280px', position: 'relative', width: '200px'}}>
                        <Text size="20px" weight="600" top="15px" left="20px" color="black">{cafename}&nbsp;선불카드</Text>
                        <Text size="20px" weight="400" top="45px" left="35px" color="black">잔액&nbsp;<b>{left}</b>원</Text>
                    </div>

                </ShadowBox>
                <ShadowBox height="125px" style={{ top: '387px', }}>
                    <Text size="18px" weight="600" left="20px" color="black">충전금액</Text> 
                    <ButtonDict >
                    </ButtonDict>
                </ShadowBox>
                <ShadowBox height="180px" style={{ top: '530px', }}>
                    <Text size="18px" weight="600" left="20px" color="black">결제수단</Text> 
                    <Text size="15px" weight="200" top="40px" left="20px" color="black">충전시 유의사항 구절구절구절</Text>
                </ShadowBox>
                <OrderButtonBox top="760px">
                    <OrderText>주문하기</OrderText>
                </OrderButtonBox>
            </>

        );
    }

export default Charge;