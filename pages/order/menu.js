import styled from "styled-components";
import OrderButton from "../../components/Order/OrderButton";
import Text from "../../styles/text/Text";
import OrderButtonBox from "../../components/Order/OrderBox";
import OrderText from "../../components/Order/OrderText";
import MenuBoard from "../../components/Order/MenuBoard";

function MenuList() {
        return(
            <>
                <MenuBoard />
                <Text size="20px" weight="600" color="black" top="585px" left="30px">현재 잔액</Text>
                <Text size="20px" weight="600" color="#9E6027" top="585px" left="350px">4500원</Text>
                <OrderButtonBox top="180px">
                    <OrderText>주문하기</OrderText>
                </OrderButtonBox>
            </>

        );
    }

export default MenuList;