function Processes(props: {
  processes: {
    title: string;
    content: string;
  }[];
}) {
  const { processes } = props;
  return (
    <>
      {processes.map((process: any, idx: number) => (
        <div className=" rounded-2xl px-4 py-8 shadow-900">
          <div className="mb-6 flex gap-2 text-[18px]">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-darkBlue  text-white">
              0{idx + 1}
            </div>
            <p>{process.title}</p>
          </div>
          <div>{process.content}</div>
        </div>
      ))}
    </>
  );
}

export default Processes;
