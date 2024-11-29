import LoadingIcon from "../assets/weather/loading.svg";

function Loading() {
  return (
    <div className="flex items-center justify-center">
      <img src={LoadingIcon} alt="" width={60} height={60} />
      <p className="ms-4 text-2xl">Loading...</p>
    </div>
  );
}

export default Loading;
