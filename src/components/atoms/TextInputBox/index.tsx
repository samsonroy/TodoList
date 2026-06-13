import React from 'react';
import { TextInput, type TextInputProps } from 'react-native';

type TextInputBoxProps = TextInputProps;

// A styled wrapper around TextInput to maintain consistent design across the app
const TextInputBox = ({ style, ...props }: TextInputBoxProps) => {
  return (
    <TextInput
      className="flex-1 rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900"
      style={style}
      {...props}
    />
  );
};

export default TextInputBox;
