import styled from "styled-components";

const OrderButtonBox = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 326px;
    height: 43px;
    
    top: ${props => props.top};
    left: 50%; transform: translate(-50%, -50%); 

    background: #9E6027;
    border-radius: 20px;
`;

export default OrderButtonBox;