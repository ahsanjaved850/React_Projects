import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Contact Us page test case" , () => {

    afterAll(() => {
        console.log("After All")
    })

    afterEach(() => {
        console.log("After Each")
    })

    beforeAll(() => {
        console.log("Before All")
    })

    beforeEach(() => {
        console.log("Before Each")
    })

    test("Should load contact us component", () => {
        render(<Contact></Contact>);
    
        const heading = screen.getByRole("heading")
    
        expect(heading).toBeInTheDocument()
    })
    
    it("Should load button inside the contact us component", () => {
        render(<Contact></Contact>);
    
        // const header = screen.getByRole("header")
        // const button = screen.getByRole("button")
        
    
        // const input = screen.getAllByPlaceholderText("Name")
    
        // If you want to do the test for 2 input boxes
        // const inputBoxes = screen.getAllByRole("textbox")
    
        const button = screen.getByText("Submit")
    
        // expect(button).not.toBe()
    
        expect(button).toBeInTheDocument()
    })
})

