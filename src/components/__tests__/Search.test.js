import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import UserContext from "../../utils/userContext";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search res list for burger text input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  // const cardBefore = screen.getAllByTestId("resCard");
  // console.log("🚀 ~ test ~ cards:", cardBefore);

  // expect(cardBefore.length).toBe(12);
  const searchBtn = screen.getByRole("button", {
    name: "Search",
  });

  const searchInput = screen.getByTestId("searchInput");

  // fireEvent.change(searchInput, { target: { value: "burger" } });

  // fireEvent.click(searchBtn);

  // //   screen should load 4 res cards

  // const cards = screen.getAllByTestId("resCard");
  // console.log("🚀 ~ test ~ cards:", cards);

  // //   expect(searchBtn).toBeInTheDocument();
  // expect(cards.length).toBe(1);
});

it("Should top search res list for burger text input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  // const card = screen.getAllByTestId("resCard");

  // expect(card.length).toBe(1);
});
