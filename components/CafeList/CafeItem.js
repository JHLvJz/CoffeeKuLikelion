import styled from "styled-components";
import CafeName from  "./CafeName";
import CafeInfo from "./CafeInfo";
import Arrow from "../../styles/Arrow";
import DollarIcon from "./DollarIcon";

const CafeBox = styled.div`
    position: relative;
    width: 350px;
    min-height: 78px;
    margin: 3% 0px;
    align-items: center;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;

    ${CafeName} {
        position: absolute;
        top: 3px;
        left: 20px;
    }

    ${CafeInfo} {
        position: absolute;
        top: 35px;
        left: 20px;
    }

    ${Arrow} {
        position: relative;
        top: 2px;
        left: 12px;
    }

    ${DollarIcon} {
        position: absolute;
        top: 15px;
        right: 15px;
    }
`

function CafeItem ({ cafename, cafeinfo }) {
    return(
        <CafeBox>
            <CafeName>
                {cafename}
                <Arrow src="/images/arrow.png" />
            </CafeName>
            <DollarIcon src="/images/cafeDollar.png"/>
            <CafeInfo>{cafeinfo}</CafeInfo>
        </CafeBox>
    );
}

export default CafeItem;