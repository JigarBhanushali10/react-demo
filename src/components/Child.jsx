import React from 'react';
import GrandChild from './GrandChild';

export const Child = (props) => {

    console.log(props);
    let dataFromProps = props?.pooja

    return (
        <div style={{ border: '1px solid black', padding: 4 ,margin :8}}>
            <div>

            
            Child:
            </div>
            <button onClick={() => props.methodAsProps('Decreament count from child')} className='mb-3'>click to decreament count from parent</button>
            <GrandChild>
                    This is data from props:{dataFromProps}
 </GrandChild>
        </div>
    );

}
