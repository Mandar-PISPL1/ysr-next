import React, { useState } from 'react';

const SwitchButton = (props: any) => {
  const [selectedOption, setSelectedOption] = useState('USD');

  const handleToggle = () => {
    setSelectedOption(selectedOption === 'USD' ? 'INR' : 'USD');
  };

  return (
    <div className="flex items-center">
      <button
        className={`${
          selectedOption === 'USD'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700'
        } rounded-l-full py-2 px-4 transition-colors duration-300`}
        onClick={() => {
          setSelectedOption('USD');
          props.setIsUSD(true);
        }}
      >
        USD
      </button>
      <button
        className={`${
          selectedOption === 'INR'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700'
        } rounded-r-full py-2 px-4 transition-colors duration-300`}
        onClick={() => {
          setSelectedOption('INR');
          props.setIsUSD(false);
        }}
      >
        INR
      </button>
    </div>
  );
};

export default SwitchButton;
