import { describe, expect, it } from "vitest";
import { NOT_FOUND_COD } from "../constants";
import { useWeatherStore } from "./fakeWeatherStore";
import waitFor from "../utils/waitFor";

describe("Fake Weather Store", () => {
  it("should initialize with weatherInfo of undefined", () => {
    const store = useWeatherStore.getState(); // Access the Zustand store directly
    expect(store.weatherInfo).toBe(undefined);
  });

  it("should get the weatherInfo of cod 200", async () => {
    let store = useWeatherStore.getState();
    await store.getWeather("Taipei", "TW");
    await waitFor(100);
    store = useWeatherStore.getState();
    expect(store.weatherInfo?.cod).toBe(200);
  });

  it("should get the weatherInfo of cod 404", async () => {
    let store = useWeatherStore.getState();
    await store.getWeather("Whatever city", "Whatever country");
    await waitFor(100);
    store = useWeatherStore.getState();
    expect(store.weatherInfo?.cod).toBe(NOT_FOUND_COD);
  });
});
