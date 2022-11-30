import styled from "styled-components";
import Text from "../../styles/text/Text";

const SecondCafeBox = styled.div`
    width: 110px;
    height: 115px;

    top: 110px;
    right: 25px;
    background: rgba(158, 96, 39, 0.52);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    
    position: absolute;
`;

function SecondCafe({ left, cafename }) {
    return(
        <SecondCafeBox>
            <Text size="17px" weight="600" top="0px" left="12px">{left}원</Text>
            <Text size="12px" weight="400" top="30px" left="12px">{cafename}</Text>
            <Text size="10px" weight="600" top="80px" left="62px">충전하기</Text>
        </SecondCafeBox>
    );
}

export default SecondCafe;