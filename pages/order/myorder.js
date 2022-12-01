import styled from "styled-components";
import { useRouter } from "next/router";

import Text from "../../styles/text/Text";
import OrderItem from "../../components/Order/OrderItem";
import Item from "../../components/Order/Item";

const Icon = styled.img`
    width: 17px;
    height: 17px;
    position: absolute;

    top: 40px;
    left: 15px;
`
const ColorText = styled.p`
    font-size: 20px;
    font-weight: 600;
    color: #9E6027;
    line-height: 24px;
    left: 52%;
    transform: translate(-50%, -50%);

    position: absolute;
    top: ${props => props.top}
`

const Preparing = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Prepared = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

function MyOrder() {
    const router =  useRouter();
        const onClickHandler = () => {
            router.push('/');
        };

    return(
        <>
            <Icon src="/images/backarrow.png" onClick={onClickHandler}></Icon>
            {/* 여기 픽셀 고친 거 다 바꿔야함 */}
            <Text size="20px" weight="600" top="20px" left="180px" color="black">주문내역</Text>
            <Preparing>
                <ColorText top="100px">제조 준비중</ColorText>
                <Item top="130px" cafename="카페C" date="11/30 11:28" menu="아메리카노" tempr="아이스" count="1" cost="3500"/>
            </Preparing>
            <Prepared>
                <ColorText top="300px">픽업 완료</ColorText>
            </Prepared>
            <Item top="200px" cafename="카페C" date="11/29 11:28" menu="아메리카노" tempr="아이스" count="1" cost="3500"/>
            <Item top="200px" cafename="카페C" date="11/28 11:28" menu="아메리카노" tempr="아이스" count="1" cost="3500"/>
            <Item top="200px" cafename="카페C" date="11/28 10:28" menu="아메리카노" tempr="아이스" count="1" cost="3500"/>
        </>
    )
}

export default MyOrder;