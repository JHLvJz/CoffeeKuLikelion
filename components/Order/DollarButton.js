import { useState } from "react";
import { createContext } from "react";
import styled from "styled-components";

const ButtonDict  = () => {
    const [ isSelect, setSelect ] = useState([false,  false, false]);

    const reset = function(){
        return false;
    }

    const getButton = (id, amount) => {
        return(
            <div style={{ 
                position: 'relative',
                marginRight: '8%',
                top: '60px',
                width: '73px',
                height: '43px',
                backgroundColor: isSelect[id] ?  '#ffdddd' : 'rgba(217, 217, 217, 0.44)',
                borderRadius: '10px',
            }}
            onClick={() => {
                if (isSelect.includes(true)) {
                    console.log('하')
                    setSelect([isSelect.map(reset)])
                    console.log(isSelect)
                }

                setSelect([
                    ...isSelect.slice(0, id).map( reset ),
                    !isSelect[id],
                    ...isSelect.slice(id+1).map( reset ),
                ]);
            }}>
                <p style={{ 
                    fontSize: '15px',
                    fontWeight: '400',
                    textAlign: 'center',
                    }}>{ amount }</p>
            </div>
        );
    };

    return(
        <div style={{ display: 'flex',  justifyContent: 'space-around'}}>
            {getButton(0, '1만원')}
            {getButton(1, '2만원')}
            {getButton(2, '3만원')}
            {getButton(3, '5만원')}
        </div>
    );
}

export default ButtonDict;