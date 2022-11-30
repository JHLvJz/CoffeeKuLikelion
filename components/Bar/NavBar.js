import BarItem from "./BarItem";
import styled from "styled-components"

const Navbar  = styled.nav`
    position: absolute;
    bottom: 0px;
    width: 100%;
    max-width: 450px;
    min-height: 15vh;

    background-color: #9E6027;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
`

function NavBar () {
    return(
        <Navbar style={{ display: 'flex', justifyContent: 'space-around'}}>
            <BarItem icontype="충전하기" imgpath="/images/dollar.png"/>
            <BarItem icontype="루틴 변경" imgpath="/images/settings.png"/>
            <BarItem icontype="주문 내역" imgpath="/images/shopping-cart.png"/>
        </Navbar>
    );
}

export default NavBar;