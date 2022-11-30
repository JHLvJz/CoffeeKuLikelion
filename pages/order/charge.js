import styled from "styled-components";
import ShadowBox from "../../styles/boxlayout/ShadowBox";
import Text from "../../styles/text/Text";
import OrderButtonBox from "../../components/Order/OrderBox";
import OrderText from "../../components/Order/OrderText";

const Amount = styled.div`
    width: 73px;
    height: 43px;
    background: rgba(217, 217, 217, 0.44);
    border-radius: 10px;

    text-align: center;
    line-height: 43px;
    font-size: 15px;
    font-weight:  400;
`

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
    height: 250px;
    position: absolute;

    top: 80px;
    left: 60px;
`

function Charge() {
        let cafename = '카페 C';
        let left = 4500

        return(
            <>
                <ShadowBox height="380px" style={{ display: 'flex', justifyContent: 'center'}}>
                    <Icon src="/images/backarrow.png"></Icon>
                    <Text size="18px" weight="600" top="20px" color="black">충전하기</Text>
                    <Card src="/images/cardExample.png" />
                    {/* 페이먼츠 넣기 전 예시 */}
                    <div style={{ display: 'flex', justifyContent: 'center', top: '280px', position: 'relative', width: '200px'}}>
                        <Text size="20px" weight="600" top="15px" color="black">{cafename}&nbsp;선불카드</Text>
                        <Text size="20px" weight="400" top="45px" color="black">잔액&nbsp;{left}원</Text>
                    </div>

                </ShadowBox>
                <ShadowBox height="125px" style={{ top: '387px', }}>
                    <Text size="18px" weight="600" left="20px" color="black">충전금액</Text> 
                    <div style={{ marginTop: '60px', display: 'flex', justifyContent: 'space-around', marginRight: '8%'}}>
                        <Amount>1만원</Amount>
                        <Amount>2만원</Amount>
                        <Amount>3만원</Amount>
                        <Amount>5만원</Amount>
                    </div>
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