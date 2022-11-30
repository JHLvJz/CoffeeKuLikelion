import styled from "styled-components";
import Text from "../../styles/text/Text";

const FirstCafeBox = styled.div`
    width: 209px;
    height: 224px;

    background: #9E6027;
    border-radius: 20px;   
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    position: absolute;

    top: 110px;
    left: 25px;
`;

function FirstCafe({ left, cafename }) {
    return(
        <FirstCafeBox>
            <Text size="30px" weight="600" top="0px" left="20px">{left}원</Text>
            <Text size="15px" weight="400" top="55px" left="20px">{cafename}</Text>
            <Text size="12px" weight="600" top="180px" left="150px">충전하기</Text>
        </FirstCafeBox>
    );
}

export default FirstCafe;