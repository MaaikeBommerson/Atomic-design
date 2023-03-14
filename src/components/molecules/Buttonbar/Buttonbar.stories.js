import React from 'react'
import Buttonbar from './Buttonbar'

/// TODO: fix story entries
const ButtonbarMeta = {
    title: "molecules/Buttonbar",
    component: Buttonbar,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Buttonbar-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Buttonbar {...args} />

export const DefaultButtonbar = Template.bind({})
DefaultButtonbar.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default ButtonbarMeta