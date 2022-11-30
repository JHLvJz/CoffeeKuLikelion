import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";
import styled from "styled-components";

const OrderButtonBox = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 326px;
    height: 43px;
    
    top: 115px;
    left: 50%; transform: translate(-50%, -50%); 

    background: #9E6027;
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

function OrderButton () {
    return(
        <OrderButtonBox>
            <OrderText>주문하기</OrderText>
        </OrderButtonBox>

    );
}

export default OrderButton;