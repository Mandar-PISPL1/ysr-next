function BookOrWhatsappBtn({
  isPremium,
  healer_whatsapp_link,
}: {
  isPremium: Boolean;
  healer_whatsapp_link: string;
}) {
  return (
    <div>
      {isPremium ? (
        <button className="flex items-center gap-1 rounded-lg bg-[#053560] px-4 py-2 text-white outline-none">
          <a className="flex items-center gap-1" href={healer_whatsapp_link}>
            <svg
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.0498 2.91006C16.133 1.98399 15.041 1.24973 13.8374 0.750111C12.6339 0.250494 11.3429 -0.00448012 10.0398 5.95696e-05C4.5798 5.95696e-05 0.129805 4.45006 0.129805 9.91006C0.129805 11.6601 0.589805 13.3601 1.4498 14.8601L0.0498047 20.0001L5.2998 18.6201C6.7498 19.4101 8.3798 19.8301 10.0398 19.8301C15.4998 19.8301 19.9498 15.3801 19.9498 9.92006C19.9498 7.27006 18.9198 4.78006 17.0498 2.91006ZM10.0398 18.1501C8.5598 18.1501 7.1098 17.7501 5.8398 17.0001L5.5398 16.8201L2.4198 17.6401L3.2498 14.6001L3.0498 14.2901C2.22755 12.977 1.79094 11.4593 1.7898 9.91006C1.7898 5.37006 5.4898 1.67006 10.0298 1.67006C12.2298 1.67006 14.2998 2.53006 15.8498 4.09006C16.6173 4.85402 17.2255 5.76272 17.6392 6.76348C18.0529 7.76425 18.2638 8.83717 18.2598 9.92006C18.2798 14.4601 14.5798 18.1501 10.0398 18.1501ZM14.5598 11.9901C14.3098 11.8701 13.0898 11.2701 12.8698 11.1801C12.6398 11.1001 12.4798 11.0601 12.3098 11.3001C12.1398 11.5501 11.6698 12.1101 11.5298 12.2701C11.3898 12.4401 11.2398 12.4601 10.9898 12.3301C10.7398 12.2101 9.9398 11.9401 8.9998 11.1001C8.2598 10.4401 7.7698 9.63006 7.6198 9.38006C7.4798 9.13006 7.5998 9.00006 7.7298 8.87006C7.8398 8.76006 7.9798 8.58006 8.0998 8.44006C8.2198 8.30006 8.2698 8.19006 8.3498 8.03006C8.4298 7.86006 8.3898 7.72006 8.3298 7.60006C8.2698 7.48006 7.7698 6.26006 7.5698 5.76006C7.3698 5.28006 7.1598 5.34006 7.0098 5.33006H6.5298C6.3598 5.33006 6.0998 5.39006 5.8698 5.64006C5.6498 5.89006 5.0098 6.49006 5.0098 7.71006C5.0098 8.93006 5.8998 10.1101 6.0198 10.2701C6.1398 10.4401 7.7698 12.9401 10.2498 14.0101C10.8398 14.2701 11.2998 14.4201 11.6598 14.5301C12.2498 14.7201 12.7898 14.6901 13.2198 14.6301C13.6998 14.5601 14.6898 14.0301 14.8898 13.4501C15.0998 12.8701 15.0998 12.3801 15.0298 12.2701C14.9598 12.1601 14.8098 12.1101 14.5598 11.9901Z"
                fill="white"
              />
            </svg>
            Whatsapp
          </a>
        </button>
      ) : (
        <button className="rounded-lg bg-[#053560] px-4 py-2 text-white outline-none">
          Book Now
        </button>
      )}
    </div>
  );
}

export default BookOrWhatsappBtn;
