import React from 'react'
import Form from './Form'

/// TODO: fix story entries
const FormMeta = {
    title: "organisms/Form",
    component: Form,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Form-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Form {...args} />

export const DefaultForm = Template.bind({})
DefaultForm.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default FormMeta