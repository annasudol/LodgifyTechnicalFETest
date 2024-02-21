import React, { ChangeEvent, FC } from "react";

interface Props {
  identifier: string;
  title: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

const CheckoutInput: FC<Props> = ({ identifier, checked, title, onChange }) => {
  return (
    <div className="inline-flex items-center">
      <label
        className="relative flex items-center px-3 py-4 rounded-full cursor-pointer"
        htmlFor={identifier}
      >
        <input
          type="checkbox"
          className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-md border border-customGrey-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-successGreen checked:bg-successGreen checked:before:bg-successGreen"
          id={identifier}
          value={identifier}
          onChange={onChange}
          checked={checked}
        />
        <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="16" height="16" rx="4" fill="#00B797" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.49574 10.1007L3.888 7.30201L3 8.24832L6.49574 12L13 4.94631L12.1182 4L6.49574 10.1007Z"
              fill="white"
            />
          </svg>
        </span>
      </label>
      <label
        className="text-black cursor-pointer select-none"
        htmlFor={identifier}
      >
        {title}
      </label>
    </div>
  );
};

export default CheckoutInput;
