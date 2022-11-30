//메뉴 창 -> 커피 / 콜드브루 / 논 커피 / 티에이드 
// 터치하는 메뉴에 따라서 메뉴판 화면이 업데이트 되어야 함
import { useRouter } from "next/router"
import { getRouteMatcher } from "next/dist/shared/lib/router/utils/route-matcher";
import styled from "styled-components";
import { NodeNextRequest } from "next/dist/server/base-http/node";

const MenuBox = styled.div`
    max-width: 450px;
    height: 490px;
    left: 0px;
    
    position: relative;
    top: 120px;

    // border: 1px solid red;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

// 메뉴에 따른 이동
const menuData = [
    { id: 'menu1', name: '커피', path: '/order/coffee' },
    { id: 'memu2', name: '콜드브루', path: '/order/coldbrew' },
    { id: 'menu3', name: '논 커피', path: '/order/noncoffee'},
    { id: 'menu4', name: '티/에이드', path: '/order/teaade'},
];

const MenuBoard = () => {
    const router = useRouter();
    const onClickHandler = (path) => {
        router.push(path);
    };
    console.log(router.pathname);
 
    return(
        <MenuBox>
            <nav>
                <div style={{ marginLeft: '2%'}}>
                    {menuData.map((menu) => {
                        menu.path === router.pathname ?  console.log('엥') : console.log('놉');
                        return (
                            <li key={menu.id} style={{ 
                                textAlign: 'center', 
                                listStyleType: 'none',
                                float: 'left', 
                                width: '20%', 
                                margin: '2%',
                                borderBottom: menu.path === router.pathname ? '3px solid black' : ''
                                }}>
                                <p onClick={() => onClickHandler(menu.path)} style={{
                                    fontSize: '15px',
                                    fontWeight: 600,
                                }}>
                                    {menu.name}
                                </p>
                            </li>
                        );
                    })}
                </div>
            </nav>
        </MenuBox>
    );
};
export default MenuBoard;