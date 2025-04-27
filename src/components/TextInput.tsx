import React from "react";

interface TextInputProps {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  isTextArea?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ type, name, placeholder, value, onChange, error, isTextArea }) => {
  return (
    <div>
      {isTextArea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={5}
          className="w-full px-4 py-3 rounded-lg bg-white/70 text-sm text-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-orange-500"
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-lg bg-white/70 text-sm text-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-orange-500"
        />
      )}
      {error && <p className="text-[12px] text-red-500 mt-1 ml-3">{error}</p>}
    </div>
  );
};

export default TextInput;