function PremiumTag() {
  return (
    <div>
      <button
        style={{
          backgroundColor: 'transparent',
          backgroundImage: `linear-gradient(90deg, #998100 0%, #E8C300 100%)`,
        }}
        className="rounded-md px-4 py-2 text-white"
      >
        Premium Member
      </button>
    </div>
  );
}

export default PremiumTag;
