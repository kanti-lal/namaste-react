import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";

const PromotedCard = withPromotedLabel(RestaurantCard);

it("should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Makhani Darbar");

  expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with promoted label", () => {
  render(<PromotedCard resData={MOCK_DATA} />);

  const label = screen.getByText("Veg");

  expect(label).toBeInTheDocument();
  const name = screen.getByText("Makhani Darbar");

  expect(name).toBeInTheDocument();
});
