//지성아 styled component에서 자꾸 div안 먹어요...
//ㄹㅇ .... 왜 안 먹어? 왜?
//그리고 positoin 왜 먹었다 말았다 함?

import styled from "styled-components";
import Text from "../../styles/text/Text";
import WhyText from "../../styles/text/WhyText";

const NewBox = styled.div`
    width: 355px;
    height: 131px;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    position: relative;

    top: ${props => props.top};
    left: 30px;
`;

function Item({cafename,  menu, tempr, count, cost, date, top }) {
    
    //여기 스타일드 컴포넌트 안 먹어서 다 inline수작업
    //나중에 단어 변경되어도 규격 안 바뀌게 span으로 또는 flex
    return(
        <>
            <NewBox top={top}>
                <p style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    position: 'relative',
                    top: '10px',
                    left: '20px'
                }}>{cafename}</p>
                <p style={{
                    position: 'absolute',
                    top: '10px',
                    right: '20px'
                }}>{date}</p>
                <p style={{
                    position: 'absolute',
                    fontSize: '18px',
                    fontWeight: '600',
                    top: '55px',
                    left: '20px'
                }}>{menu}</p>
                <p style={{
                    position: 'absolute',
                    fontSize: '18px',
                    fontWeight: '400',
                    top: '55px',
                    left: '110px'
                }}>{tempr} {count}잔</p>
                <p style={{
                    position: 'absolute',
                    fontSize: '18px',
                    fontWeight: '600',
                    top: '80px',
                    right: '20px'
                }}>{cost}원</p>
                <div style={{
                    border: '1px solid #999999',
                    width: '334px',
                    height: '0px',
                    position: 'absolute',
                    top: '60px',
                    left: '10px',
                }}></div>
            </NewBox>
        </>
    );
}

export default Item;