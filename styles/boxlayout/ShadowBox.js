import styled from "styled-components";

const ShadowBox = styled.div`
    position: absolute;
    min-width: 450px;
    height: ${props => props.height};
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 0px;
`

export default ShadowBox;