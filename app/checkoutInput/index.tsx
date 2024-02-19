import React, { ChangeEvent, FC } from "react";
import cn from "classnames";

interface Props  {
  identifier: string;
  title: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  defaultChecked: boolean;
}

const CheckoutInput: FC<Props> = ({
  identifier,
  defaultChecked,
  title,
  onChange,
}) => {
  return (
    <label>
      <input
        type="checkbox"
        value={title}
        id={identifier}
        onChange={onChange}
        checked={defaultChecked}
      />
      {title}
    </label>
  );
};

export default CheckoutInput;
