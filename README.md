# TXOne React.js Prototyping Exercise

### Name: Oscar

This is a project for TXOne React.js Prototyping Exercise

## How to execute my code

### `npm install`

Install the dependencies and devDependencies

### `npm run dev`

Start the dev mode on port `5173`. You can visit it on [http://localhost:5173](http://localhost:5173)

### `npm run build`

Build the project

### `npm run preview`

Preview the built project after running `npm run build`

### `npm run test`

I wrote some unit tests for testing the response from `OpenWeatherMap`. (Task 1)

There are 2 test files, `weatherStore.test.ts` and `Weather.test.ts`.

`weatherStore.test.ts` is for testing the state management using zustand, and `Weather.test.ts` is for testing the weather component with user interaction

When running the test, `fakeWeatherStore.ts` is applied for testing the mock response.

## Main dependencies and devDependencies

- vite & vitest
- typescript
- tailwindcss
- react-router-dom
- zustand (state management)
- rechart (building chart)

## Other features

The data of the line chart of Population (Task 4.) is mutatable. It's stored in `/data/mockChartData.ts`, You can modify the file to update the chart.

P.S. The `OpenWeatherMap` API key is stored in `.env`. For security reasons, this file is not accessible in the Github repository.

## Contact Info.

Oscar Liu\
886-979083032
