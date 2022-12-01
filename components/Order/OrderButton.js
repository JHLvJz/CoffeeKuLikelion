import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";
import { useRouter } from "next/router";

import styled from "styled-components";

const OrderButtonBox = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 326px;
    height: 43px;
    
    top: 180px;
    left: 50%; transform: translate(-50%, -50%); 

    // background-color: ${props => props.isSelect ? '#9E6027' : '#9E602785'};
    background-color: '#9E6027';
    border-radius: 20px;
`;
const OrderText = styled.p`
    position: absolute;
    text-align: center;
    line-height: 14px;
    color: white;

    
    font-size = 18px;
    font-weight = 600;

`;

function OrderButton ({ urlpath }) {
    const router =  useRouter();
    const onClickHandler = () => {
        router.push(urlpath);
    };

    return(
        <OrderButtonBox onClick={onClickHandler}>
            <OrderText>주문하기</OrderText>
        </OrderButtonBox>

    );
}

export default OrderButton;