function Error({ error }: { error: any }) {
  return <div className="text-danger m-auto p-2">{JSON.stringify(error)}</div>;
}

export default Error;
