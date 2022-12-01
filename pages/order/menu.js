import styled from "styled-components";
import { useRouter } from "next/router";

import OrderButton from "../../components/Order/OrderButton";
import Text from "../../styles/text/Text";
import OrderButtonBox from "../../components/Order/OrderBox";
import OrderText from "../../components/Order/OrderText";
import MenuBoard from "../../components/Order/MenuBoard";
import ShadowBox from "../../styles/boxlayout/ShadowBox";

const Icon = styled.img`
    width: 17px;
    height: 17px;
    position: absolute;

    top: 30px;
    left: ${props => props.left};
    right: ${props => props.right};
`;

function MenuList() {
        const router =  useRouter();
        const onClickHandler = (path) => {
            router.push(path);
        };

        const cafename = '카페 C';

        //marginRight 없애놔야함 
        return(
            <>
                <ShadowBox height="95px">
                    <div>
                        <p style={{ marginRight: '4%', textAlign: 'center', fontSize: '20px', fontWeight: '600'}}>주문하기</p>
                        <div style={{ marginRight: '4%', display: 'flex', justifyContent: 'center'}}>
                            <span>마이 루틴&nbsp;</span> 
                            <span style={{ fontWeight: '600' }}>{cafename}</span>
                            <span>&nbsp;의 메뉴입니다</span>
                        </div>
                    </div>
                </ShadowBox>
                <Icon onClick={()=>{onClickHandler('/')}} src="/images/backarrow.png" left="15px"/>
                <Icon onClick={()=>{onClickHandler('/order/charge')}} src="/images/cart.png" right="20px"/>
                <MenuBoard />
                {/* 여기 MenuBoard에서 hydration error나고 있음 */}
                <Text size="20px" weight="600" color="black" top="660px" left="30px">현재 잔액</Text>
                <Text size="20px" weight="600" color="#9E6027" top="660px" left="330px">4500원</Text>
                <OrderButtonBox top="260px">
                    <OrderText>주문하기</OrderText>
                </OrderButtonBox>
            </>

        );
    }

export default MenuList;