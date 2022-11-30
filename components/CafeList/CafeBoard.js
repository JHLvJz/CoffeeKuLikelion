import styled from "styled-components";
import CafeItem from "./CafeItem";
import Container from "../../styles/boxlayout/Container";

function CafeBoard() {
    return (
        <Container>
            <CafeItem cafename="카페제이" cafeinfo="아인슈페너와 테린느가 맛있는 카페"/>
            <CafeItem cafename="카페 드 브리쉘" cafeinfo="딸기우유가 맛있는 카페"/>
            <CafeItem cafename="써니사이드 커피" cafeinfo="테이크 아웃 커피가 맛있는 카페"/>
            <CafeItem cafename="더 보일" cafeinfo="인테리어 감각이 뛰어난 카페"/>
        </Container>
    );
}

export default CafeBoard;