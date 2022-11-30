import styled from "styled-components";
import Text from "./Text";

function CafeTitle ({ cafename, cafeinfo }) {
    return (
        <div>
            <Text size="25px" weight="600" color="black" left="30px" top="350px">
                {cafename}
            </Text>
            <Text size="15px" weight="400" color="black" left="30px" top="395px">
                {cafeinfo}
            </Text>
        </div>
    );
}

export default CafeTitle;