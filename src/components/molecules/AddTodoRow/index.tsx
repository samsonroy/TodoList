import React, { useState } from 'react';
import { View } from 'react-native';

import ActionButton from '../../atoms/ActionButton';
import TextInputBox from '../../atoms/TextInputBox';
import { TextConstants } from '../../../constants/text';

type AddTodoRowProps = {
  onAdd: (text: string) => Promise<boolean>;
};

// A component for adding a new "TODO" item, consisting of a text input and an "Add" button
const AddTodoRow = ({ onAdd }: AddTodoRowProps) => {
  const [textValue, setTextValue] = useState('');

  const handleAdd = async () => {
    // Trim the input to prevent adding empty or whitespace-only todos
    const trimmedValue = textValue.trim();

    // If the trimmed input is empty, do not proceed with adding a new todo
    if (!trimmedValue) {
      setTextValue('');
      return;
    }

    const wasAdded = await onAdd(trimmedValue);

    if (wasAdded) {
      setTextValue('');
    }
  };

  return (
    <View className="flex-row items-center gap-3 px-4 pt-4">
      <View className="flex-1">
        <TextInputBox
          placeholder={TextConstants.ADD_TODO_PLACEHOLDER}
          value={textValue}
          onChangeText={setTextValue}
          onSubmitEditing={handleAdd}
          returnKeyType="done"
        />
      </View>
      <ActionButton label={TextConstants.ADD_TODO_BUTTON} onPress={handleAdd} />
    </View>
  );
};

export default AddTodoRow;
