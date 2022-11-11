import React from 'react'
import DemoCounterComponentParent from '../shared/components/DemoCounterComponentParent'
// todo comments

/**
 * @name ComponentComposition
 * @desc: Demo Parent component for example of component composition 
 * @returns JSX
 */
const ComponentComposition = () => {
    return <>
        <DemoCounterComponentParent name='Parent' >
           </DemoCounterComponentParent>
    </>
}

export default ComponentComposition