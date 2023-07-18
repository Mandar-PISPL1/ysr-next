import Image from 'next/image';

export default function ChooseUs() {
  const data = [
    {
      src: '/img/why-choose-us/TeamofExperts.png',
      title: `Team of Experts

    `,
      rounded: true,
    },
    {
      src: '/img/why-choose-us/Startup India.png',
      title: `
    Startup Recognized by Govt. of India
`,
    },
    {
      src: '/img/why-choose-us/ISO  Certification.png',
      title: `ISO 9001:2015
    Certified`,
    },
    {
      src: '/img/why-choose-us/Customer Satisfaction.png',
      title: `100% Customer Satisfaction
    `,
      rounded: true,
    },
    {
      src: '/img/why-choose-us/MSME Logo.png',
      title: `Ministry of Micro, Small and Medium Enterprises
    `,
    },
  ];
  return (
    <div>
      <div className="  grid grid-cols-2 gap-4 lg:grid-cols-5 lg:gap-8">
        {data.map((d) => (
          <div className="flex flex-col   items-center gap-4 rounded-lg bg-white p-4 shadow-2xl lg:py-4 lg:px-4">
            <Image
              alt={d.title}
              objectFit="contain"
              height={200}
              width={200}
              src={d.src}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
