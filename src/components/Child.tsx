import React from 'react';
import GrandChild from '../components/GrandChild.tsx';

export const Child = (props: any) => {

    console.log(props);
    let dataFromProps = props?.pooja
  
    return (
        <div>
            <button onClick={() => props.jigar('sending data from child to parent ')}>click to send data to parent</button>

            
                <GrandChild>
                    This is data from props:{dataFromProps}
                </GrandChild>
        </div>
    );

}
