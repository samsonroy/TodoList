import React from 'react';
import { Text, type TextProps } from 'react-native';

// A simple wrapper around Text to apply consistent styling across the app
const TextLabel = ({ style, ...props }: TextProps) => {
  return <Text className="text-base text-slate-900" style={style} {...props} />;
};

export default TextLabel;
