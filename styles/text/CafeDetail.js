import styled from "styled-components";
import Text from "./Text";

const InfoMenu = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    position: relative;
    top: ${props => props.top};
    left: ${props => props.left};

`;

const TextMenu = styled.p`
    color: ${props => props.color || '#676767'};
    font-size: 15px;
    font-weight: 400;
    margin: 4px 0;
`;

function CafeDetail ({ time, holiday, phoneNum, address }) {
    return (
        <>
            <InfoMenu top="100px"left="30px">
                <TextMenu>영업시간</TextMenu>
                <TextMenu>휴무일</TextMenu>
                <TextMenu>전화번호</TextMenu>
                <TextMenu>주소</TextMenu>
            </InfoMenu>
            <InfoMenu left="120px">
                <TextMenu color="black">{time}</TextMenu>
                <TextMenu color="black">{holiday}</TextMenu>
                <TextMenu color="black">{phoneNum}</TextMenu>
                <TextMenu color="black">{address}</TextMenu>
            </InfoMenu>
        </>
    );
}

export default CafeDetail;