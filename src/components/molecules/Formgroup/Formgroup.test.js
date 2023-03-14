import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultFormgroup } from './Formgroup.stories'

const testID = "Formgroup-" + Math.floor(Math.random()*90000) + 10000

describe("Formgroup", () => {

    it("Can render Formgroup", () => {
        render(<DefaultFormgroup testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})