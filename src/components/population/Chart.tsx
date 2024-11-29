import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Props } from "recharts/types/component/Legend";

const data = [
  {
    name: "2015",
    male: 104752,
    female: 96771,
    amt: 2400,
  },
  {
    name: "2016",
    male: 102046,
    female: 94827,
    amt: 2210,
  },
  {
    name: "2017",
    male: 95090,
    female: 88352,
    amt: 2290,
  },
  {
    name: "2018",
    male: 88146,
    female: 82426,
    amt: 2000,
  },
  {
    name: "2019",
    male: 87291,
    female: 80920,
    amt: 2181,
  },
  {
    name: "2020",
    male: 81634,
    female: 75673,
    amt: 2500,
  },
  {
    name: "2021",
    male: 77117,
    female: 72201,
    amt: 2100,
  },
  { name: "2022", male: 68164, female: 63444, amt: 2100 },
];

const renderLegend = (props: Props) => {
  const { payload } = props; // `payload` contains the legend items
  return (
    <ul className="mt-4 flex list-none justify-center gap-4">
      {payload &&
        payload.map((entry, index) => (
          <li
            key={`item-${index}`}
            className="mb-1 flex flex-wrap items-center"
          >
            {/* Rectangle with line color */}
            <div
              className="me-2 h-2.5 w-[60px]"
              style={{
                backgroundColor: entry.color,
              }}
            ></div>
            {/* Data key */}
            <span className="text-sm capitalize">{entry.value}</span>
          </li>
        ))}
    </ul>
  );
};

const formatYAxis = (value: any, _: number) => {
  if (value >= 1000) {
    return `${value / 1000}K`;
  }
  return value;
};

function Chart() {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <LineChart data={data}>
        <CartesianGrid stroke="#ccc" strokeDasharray="0" vertical={false} />
        <XAxis
          dataKey="name"
          axisLine={false}
          padding={{ left: 30, right: 15 }}
          tickLine={false}
          tick={{ dy: 10, fontSize: 12, fontFamily: "arial", fill: "#000000" }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fontFamily: "arial", fill: "#000000" }}
          tickFormatter={formatYAxis}
          domain={[50000, 110000]}
          ticks={[50000, 60000, 70000, 80000, 90000, 100000, 110000]}
        />
        <Tooltip />
        <Legend
          // @ts-ignore
          content={renderLegend}
        />
        <Line
          type="linear"
          dataKey="male"
          stroke="#80B4FF"
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
        <Line
          type="linear"
          dataKey="female"
          stroke="#E86997"
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;
