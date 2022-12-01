import styled from "styled-components"
import { useRouter } from "next/router";

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

function BarItem ({ icontype, imgpath, urlpath }) {
    const router = useRouter();
    const onClickHandler = () => {
        router.push(urlpath);
    };

    return(
        <div>
            <BarElement>{icontype}</BarElement>
            <BarIcon onClick={onClickHandler} src={imgpath}></BarIcon>
        </div>
    );
}

export default BarItem;