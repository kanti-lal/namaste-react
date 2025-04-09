import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

// unit testing of header component
it("Should load header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  //   const loginButton = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});

it("Should render header component with Cart item 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const cartItem = screen.getByText("Cart (0 items)");
  const cartItem = screen.getByText(/Cart/); // by regex

  expect(cartItem).toBeInTheDocument();
});

it("Should render header component with Cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText(/Cart/); // by regex

  expect(cartItem).toBeInTheDocument();
});

it("Should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" }); // by regex

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" }); // by regex

  expect(logoutButton).toBeInTheDocument();
});
