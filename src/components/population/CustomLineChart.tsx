import { useMemo } from "react";
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
import { CustomChartData } from "../../types/ChartData";

type CustomLineChartProps = CustomChartData & {
  formatYAxis?: (value: string | number, index: number) => any;
};

function CustomLineChart(props: CustomLineChartProps) {
  const data = useMemo(
    () =>
      props.xAxis.map((xa, i) => {
        const element: { [key: string]: number | string } = {
          _name: xa,
        };
        for (let d of props.data) {
          element[d.dataKey] = d.data[i];
        }
        return element;
      }),
    [props.data, props.xAxis],
  );

  const domain = useMemo(() => {
    if (props.min !== undefined && props.max !== undefined)
      return [props.min, props.max];
    if (props.min !== undefined) return [props.min];
    if (props.max !== undefined) return [props.max];
    return undefined;
  }, [props.min, props.max]);

  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <LineChart data={data}>
        <CartesianGrid stroke="#ccc" strokeDasharray="0" vertical={false} />
        <XAxis
          dataKey="_name"
          axisLine={false}
          padding={{ left: 30, right: 15 }}
          tickLine={false}
          tick={{ dy: 10, fontSize: 12, fontFamily: "arial", fill: "#000000" }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fontFamily: "arial", fill: "#000000" }}
          tickFormatter={props.formatYAxis}
          domain={domain}
          ticks={props.yAxis}
        />
        <Tooltip />
        <Legend
          // @ts-expect-error
          content={renderLegend}
        />
        {props.data.map((d) => (
          <Line
            key={d.dataKey}
            type="linear"
            dataKey={d.dataKey}
            stroke={d.color}
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

function renderLegend(props: Props) {
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
}

export default CustomLineChart;
