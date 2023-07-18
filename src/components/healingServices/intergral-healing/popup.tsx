import { useModalAction } from '@/components/ui/modal/modal.context';

export default function HealingModalities({ data }: any) {
  const { closeModal } = useModalAction();
  if (!data) {
    return <></>;
  }
  return (
    <div className="flex justify-center">
      <div className="w-3/4  rounded-2xl bg-white py-8 px-10">
        <div className="float-right">
          <svg
            onClick={closeModal}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6 text-red-600 hover:cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div>
          <h1 className="text-[34px] font-bold">{data.name}</h1>
        </div>
        <div className="grid grid-cols-10">
          <div
            className="col-span-6 grid gap-6"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
          <div className="col-span-4 flex justify-center">
            <img
              src={data.img_src}
              alt=""
              className="max-h-[300px] rounded-md"
            />
          </div>
        </div>
        <section>
          <div className="text-[34px] font-bold">Benefits</div>
          <div>
            <li>Promotes positivity & boosts confidence​</li>
            <li>Reduces the pain from diseases​</li>
          </div>
        </section>
      </div>
    </div>
  );
}
