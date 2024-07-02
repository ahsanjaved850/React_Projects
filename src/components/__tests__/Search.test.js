import { fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body"
import { json } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

// MOCK Data is the data we get form the api and save into the mock file in the from of json

// global.fetch = jest.fn(() => {
//     return Promise.resolve({
//         json: () => {
//             return Promise.resolve(MOCK_DATA)
//         }
//     })
// })

it("Should render the Body COmpnoent with search", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body></Body>
        </BrowserRouter>
))

const cardBeforeSearch = screen.getAllByTestId("resCard")

expect(cardBeforeSearch.length).toBe(8)

const searchBtn = screen.getByRole("button", {name: "Search"})

const searchInput = screen.getAllByTestId("searchInput")

fireEvent.change(searchInput, { target: { value: "Burger"}})

fireEvent.click(searchBtn)

// screen should load 4 cards

const cardsAfterSearch = screen.getAllByTestId("resCard")

expect(cardsAfterSearch.length).toBe(4);
})