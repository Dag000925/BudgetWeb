import React from "react";
import { Input } from 'antd';

interface InputProps {
  type: 'text' | 'number' | 'password';
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const InputComponent: React.FC<InputProps> = ({ type, value, onChange, placeholder }) => {
  return (
    <div className="input-wrapper">
      <Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border rounded p-2"
      />
    </div>
  );
};

export default InputComponent;
