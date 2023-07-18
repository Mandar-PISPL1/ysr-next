import Image from 'next/image';

export default function Counselling() {
  return (
    <div>
      <div className="my-8 grid grid-cols-4">
        <div>
          <div className="flex justify-center">
            <Image
              className="transition-all delay-200 ease-in hover:scale-110"
              src={`https://yourspiritualrevolution.org/wp-content/uploads/2022/07/Counselling.png`}
              height={100}
              width={150}
              alt=""
            />
          </div>
          <p className="mt-3 text-center text-blue-600 underline">
            Counselling
          </p>
        </div>
        <div>
          <div className="flex justify-center">
            <Image
              className="transition-all delay-200 ease-in hover:scale-110"
              src={`https://yourspiritualrevolution.org/wp-content/uploads/2022/07/Reiki.png`}
              height={100}
              width={150}
              alt=""
            />
          </div>
          <p className="mt-3 text-center text-blue-600 underline">
            Energy Healing Modalities
          </p>
        </div>
        <div>
          <div className="flex justify-center">
            <Image
              className="transition-all delay-200 ease-in hover:scale-110"
              src={`https://yourspiritualrevolution.org/wp-content/uploads/2022/07/Astrological-Consultation.png`}
              height={100}
              width={150}
              alt=""
            />
          </div>
          <p className="mt-3 text-center text-blue-600 underline">
            Astrological Consultation
          </p>
        </div>
        <div>
          <div className="flex justify-center">
            <Image
              className="transition-all delay-200 ease-in hover:scale-110"
              src={`https://yourspiritualrevolution.org/wp-content/uploads/2022/07/Energy-Healing-Modalities.png`}
              height={100}
              width={150}
              alt=""
            />
          </div>
          <p className="mt-3 text-center text-blue-600 underline">Reiki</p>
        </div>
      </div>
    </div>
  );
}
