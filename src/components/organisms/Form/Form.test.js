import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultForm } from './Form.stories'

const testID = "Form-" + Math.floor(Math.random()*90000) + 10000

describe("Form", () => {

    it("Can render Form", () => {
        render(<DefaultForm testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})