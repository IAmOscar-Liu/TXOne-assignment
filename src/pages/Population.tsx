import pinIcon from "../assets/pin.svg";
import CustomLineChart from "../components/population/CustomLineChart";
import mockChartData from "../data/mockChartData";

function Population() {
  return (
    <div className="px-10 py-8">
      <h1 className="text-4xl font-thin">Population</h1>
      <div className="ring-black-20 mt-8 max-w-[542px] rounded-md bg-white py-6 ring-1">
        <div className="mb-6 flex justify-between px-6">
          <h1 className="flex items-center text-xl font-bold text-primary">
            <img src={pinIcon} alt="" width={24} height={24} />
            <span className="ms-2">Birth in Taiwan</span>
          </h1>
          <p className="text-sm text-black-60">
            source: Ministry of the Interior
          </p>
        </div>
        <div className="me-6 aspect-[448/289]">
          <CustomLineChart
            {...mockChartData}
            formatYAxis={(value) => {
              if (typeof value !== "number") return value;
              return value >= 1000 ? `${value / 1000}K` : value;
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Population;
