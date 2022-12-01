//지성아 styled component에서 자꾸 div안 먹어요...
import styled from "styled-components";
import Text from "../../styles/text/Text";

function OrderItem({cafename,  menu, tempr, count, cost, date }) {
    return(
        <div style={{ 
            // backgroundColor: 'red',
            width: '355px',
            height: '131px',

            background: '#FFFFFF',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '20px',
            position: 'relative'
            }}>
            <Text size="18px" weight="600" color="black" top="50px">{cafename}</Text>
            <p>{date}</p>
            <div>
                
            </div>
            <Text size="18px" weight="600" color="black">{menu}</Text>
            <span>{tempr}</span>
            <span> {count}잔</span>
            <Text size="18px" weight="600" color="black">{cost}원</Text>
        </div>
    );
}

export default OrderItem;