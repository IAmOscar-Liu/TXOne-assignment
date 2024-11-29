import { CustomChartData } from "../types/ChartData";

const mockChartData: CustomChartData = {
  data: [
    {
      dataKey: "Male",
      color: "#80B4FF",
      data: [104752, 102046, 95090, 88146, 87291, 81634, 77117, 68164],
    },
    {
      dataKey: "Female",
      color: "#E86997",
      data: [96771, 94827, 88352, 82426, 80920, 75673, 72201, 63444],
    },
  ],
  xAxis: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
  yAxis: [50000, 60000, 70000, 80000, 90000, 100000, 110000],
  min: 50000,
  max: 110000,
};

export default mockChartData;
