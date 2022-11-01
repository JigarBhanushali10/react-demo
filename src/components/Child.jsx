import React from 'react';
import GrandChild from './GrandChild';

export const Child = (props) => {

    console.log(props);
    let dataFromProps = props?.pooja

    return (
        <div  className='border-dark border p-3'>
            <div>
                Child:
            </div>
            <button onClick={() => props.methodAsProps('Decreament count from child')}  className=' btn btn-danger m-3 '>click to decreament count from child</button>
            <GrandChild>
                This is data from props:{dataFromProps}
            </GrandChild>
        </div>
    );

}
