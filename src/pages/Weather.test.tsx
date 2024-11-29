import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useWeatherStore as useFakeWeatherStore } from "../store/fakeWeatherStore"; // Fake store for testing
import Weather from "./Weather";

vi.mock("../store/weatherStore", () => ({
  useWeatherStore: vi.fn().mockImplementation(useFakeWeatherStore),
}));

describe("Weather Page with Fake Weather Store", () => {
  beforeEach(() => {});

  afterEach(() => {});

  it("should display 'No Data' for first time", () => {
    render(<Weather />);
    expect(screen.getByText(/No Data/i)).toBeInTheDocument();
  });

  it("should show the weather info of Taipei after submitting city='Taipei' & country='TW'", async () => {
    render(<Weather />);

    // Get the input fields and button
    const countryInput = screen.getByLabelText(/country/i);
    const cityInput = screen.getByLabelText(/city/i);
    const submitButton = screen.getByRole("button", { name: /search/i });

    // Simulate user input
    fireEvent.change(countryInput, { target: { value: "TW" } });
    fireEvent.change(cityInput, { target: { value: "Taipei" } });

    // Simulate form submission
    fireEvent.click(submitButton);

    await waitFor(
      () => {
        expect(screen.getByRole("heading", { name: /Taipei/i }))
          .toBeInTheDocument;

        const description = screen.getByText(/few clouds/i);
        expect(description).toBeInTheDocument;
        expect(description.tagName).toBe("P");

        expect(screen.getByText(/Humidity: 35%/i)).toBeInTheDocument;
        expect(screen.getByText(/Temperature 19℃ ~ 21℃/i)).toBeInTheDocument;
      },
      { timeout: 2000 }, // Timeout after 2 seconds
    );
  });

  it("should not show the weather info if city or country not existed", async () => {
    render(<Weather />);

    // Get the input fields and button
    const countryInput = screen.getByLabelText(/country/i);
    const cityInput = screen.getByLabelText(/city/i);
    const submitButton = screen.getByRole("button", { name: /search/i });

    // Simulate user input
    fireEvent.change(countryInput, { target: { value: "Whatever country" } });
    fireEvent.change(cityInput, { target: { value: "Whatever city" } });

    // Simulate form submission
    fireEvent.click(submitButton);

    await waitFor(
      () => {
        const message = screen.getByText(/City not found/i);
        expect(message).toBeInTheDocument;
        expect(message.tagName).toBe("P");
      },
      { timeout: 2000 }, // Timeout after 2 seconds
    );
  });
});
