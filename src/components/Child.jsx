import React, { useContext } from 'react';
import { ReactContext } from '../shared/components/ReactContext';
import GrandChild from './GrandChild';


const Child = (props) => {
    const data = useContext(ReactContext)

    console.log('------------------Child-----------------------');
    console.log(props);

    return (

        <div className='border-dark border p-3'>
            <div>
                Child:
            </div>
            <div>
                {data}
            </div>
            <button onClick={() => props.methodAsProps('Decreament count from child')} className=' btn btn-danger m-3 '>click to decreament count from child</button>
            {/* <GrandChild>
                This is data from props:{dataFromProps}
            </GrandChild> */}
            {props.children}
        </div>
    );

}

export default React.memo(Child)
// export default Child
