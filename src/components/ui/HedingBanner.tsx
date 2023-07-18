function HeadingBanner({ title }: { title: string }) {
  return (
    <div className="  flex justify-center text-center font-bold lg:text-[28px]">
      <div className="max-w-fit rounded-bl-xl rounded-tr-xl border border-[#166ab4] px-4 py-2 text-[#166ab4]">
        {title}
      </div>
    </div>
  );
}

export default HeadingBanner;
