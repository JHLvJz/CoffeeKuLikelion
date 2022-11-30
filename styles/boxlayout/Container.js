//카페 리스트 보여주는 컨테이너 박스 (메인화면)

import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 360px;
    height: 35vh;
    margin: 0px auto;

    position: relative;
    overflow: scroll;
    left: 12px;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export default Container;