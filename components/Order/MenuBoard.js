//메뉴 창 -> 커피 / 콜드브루 / 논 커피 / 티에이드 
// 터치하는 메뉴에 따라서 메뉴판 화면이 업데이트 되어야 함

import { useRouter } from "next/dist/client/router";
import { useNavigation } from "react-router-dom"
import { getRouteMatcher } from "next/dist/shared/lib/router/utils/route-matcher";
import styled from "styled-components";
import Link from 'next/link';

const MenuBox = styled.div`
    max-width: 450px;
    height: 490px;
    left: 0px;
    
    position: relative;
    top: 90px;

    border: 1px solid red;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const barElement = styled.ul`
    width: 100%;
    margin: 15px 0 0 15px;
`;

// 메뉴에 따른 이동
const menuData = [
    { id: 'menu1', name: 'coffee', path: '/order/coffee' },
    { id: 'memu2', name: 'coldbrew', path: '/order/coldbrew' },
    { id: 'menu3', name: 'noncoffee', path: '/order/noncoffee'},
    { id: 'menu4', name: 'teaade', path: '/order/teaade'},
];

const MenuBoard = () => {
    const router = useRouter();
    const navigate = useNavigation();

    return(
        <MenuBox>
            <nav>
                <barElement>
                    {menuData.map((menu) => {
                        return (
                            <li key={menu.id} style={{ display: 'inline', marginRight: '30px'}}>
                                <p onClick={() => {navigate(menu.path)}}>
                                    <p style={{
                                        fontSize: '30px',
                                        fontWeight: 600,
                                        textDecoration: 'none',

                                        color: menu.path === getRouteMatcher.pathname ? 'hotpink' : 'black',
                                    }}>
                                        {menu.path === router.pathname && '☕️'}
                                        {menu.name}
                                    </p>
                                </p>
                            </li>
                        );
                    })}
                </barElement>
            </nav>
        </MenuBox>
    );
};
export default MenuBoard;