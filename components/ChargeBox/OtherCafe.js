import styled from "styled-components";
import Text from "../../styles/text/Text";

const OtherCafeBox = styled.div`
    width: 110px;
    height: 100px;

    top: 235px;
    right: 25px;

    background: #ffdddd;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;x;
    
    position: absolute;
`;

function OtherCafe({ left, cafename }) {
    return(
        <OtherCafeBox>
            <Text size="17px" weight="600" top="0px" left="12px" color="black">다른 카페</Text>
            <Text size="17px" weight="600" top="17px" left="12px" color="black">충전하기</Text>
        </OtherCafeBox>
    );
}

export default OtherCafe;