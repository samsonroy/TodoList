import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import ActionButton from '../../atoms/ActionButton';
import TextInputBox from '../../atoms/TextInputBox';
import TextLabel from '../../atoms/TextLabel';
import type { Todo } from '../../../reduxstore/slices/TodoSlice';
import { TextConstants } from '../../../constants/text';

type TodoItemRowProps = {
  todo: Todo;
  onUpdate: (text: string) => void;
  onRemove: (id: string) => void;
};

// A component representing a single "TODO" item, with options to edit or delete it
const TodoItemRow = ({ todo, onUpdate, onRemove }: TodoItemRowProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [draftText, setDraftText] = useState(todo.description);

  useEffect(() => {
    setDraftText(todo.description);
  }, [todo.description]);

  const handleSave = () => {
    const trimmedText = draftText.trim();

    if (!trimmedText) {
      return;
    }

    onUpdate(trimmedText);
    setIsEditing(false);
  };

  const handleStartEditing = () => {
    setIsEditing(true);
  };

  const handleRemove = () => {
    onRemove(todo.id);
  };

  return (
    <View className="w-full gap-3 rounded-2xl border border-slate-200 bg-white p-4 mb-3">
      <View className="min-h-12 justify-center">
        {isEditing ? (
          <TextInputBox
            value={draftText}
            onChangeText={setDraftText}
            autoFocus
          />
        ) : (
          <TextLabel>{todo.description}</TextLabel>
        )}
      </View>
      <View className="flex-row flex-wrap gap-2 ">
        {isEditing ? (
          <ActionButton
            label={TextConstants.SAVE_TODO_BUTTON}
            onPress={handleSave}
          />
        ) : (
          <ActionButton
            label={TextConstants.UPDATE_TODO_BUTTON}
            onPress={handleStartEditing}
          />
        )}
        <ActionButton
          label={TextConstants.DELETE_TODO_BUTTON}
          onPress={handleRemove}
          kind="danger"
        />
      </View>
    </View>
  );
};

export default TodoItemRow;
