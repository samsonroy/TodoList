import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

type ActionButtonProps = {
  label: string;
  onPress: () => void;
  kind?: 'primary' | 'danger';
};

// A reusable button component for actions like "Add", "Update", "Delete" with consistent styling
const ActionButton = ({
  label,
  onPress,
  kind = 'primary',
}: ActionButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      className={[
        'min-h-12 items-center justify-center rounded-xl px-4',
        kind === 'primary' ? 'bg-slate-900' : 'bg-red-700',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <Text className="font-semibold text-white">{label}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
