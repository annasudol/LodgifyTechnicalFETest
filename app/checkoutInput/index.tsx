import React, { ChangeEvent, FC } from "react";
import cn from "classnames";

interface Props {
  identifier: string;
  title: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

const CheckoutInput: FC<Props> = ({ identifier, checked, title, onChange }) => {
  return (
    <label>
      <input
        type="checkbox"
        value={identifier}
        id={identifier}
        onChange={onChange}
        checked={checked}
      />
      {title}
    </label>
  );
};

export default CheckoutInput;
