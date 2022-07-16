import { render, screen } from "@testing-library/react";
import store from "./redux/store";
import { Provider } from "react-redux";
import Contact from "../../api/src/models/Contact";

test("should renders an button element with the legend 'registrar nuevo contacto'", () => {
  render(
    <Provider store={store}>
      <Contact />
    </Provider>
  );
  const addNewRegistrationButton = screen.getByRole("button", {
    name: /registrar nuevo contacto/i,
  });

  expect(addNewRegistrationButton).toBeInTheDocument();
});
