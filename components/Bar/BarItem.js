import styled from "styled-components"

const BarElement = styled.p`
    font-size: 15px;
    color: white;
    position: relative;
    top: 2vh;
`;

const BarIcon = styled.img`
    width: 30px;
    height: 30px;
    position: relative;
    top: 2vh;
    left: 12px;
`;

function BarItem ({ icontype, imgpath }) {
    return(
        <div>
            <BarElement>{icontype}</BarElement>
            <BarIcon src={imgpath}></BarIcon>
        </div>
    );
}

export default BarItem;