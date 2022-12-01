import styled from "styled-components";

import FirstCafe from "./FirstCafe";
import OtherCafe from "./OtherCafe";
import SecondCafe from "./SecondCafe";

const LeftBoard = styled.div`
    width: 350px;
    height: 225px;
`;

function TopCafeBoard () {

    return(
        <LeftBoard>
            <FirstCafe left="4500" cafename="카페제이"/>
            <SecondCafe left="3000" cafename="써니사이드 커피"/>
            <OtherCafe />
        </LeftBoard>
    );
}

export default TopCafeBoard;