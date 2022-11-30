import styled from "styled-components";

const Text = styled.p`
    color: ${props => props.color || 'white'};
    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
    
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
`;

export default Text;