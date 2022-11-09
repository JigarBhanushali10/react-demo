import React from 'react'
import DemoCounterComponentChild from '../shared/components/DemoCounterComponentChild'
import DemoCounterComponentGrandChild from '../shared/components/DemoCounterComponentGrandChild'
import DemoCounterComponentParent from '../shared/components/DemoCounterComponentParent'

const ComponentComposition = () => {
    return <>
        <DemoCounterComponentParent name='Parent' >
           </DemoCounterComponentParent>
    </>
}

export default ComponentComposition