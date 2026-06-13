import { useCallback } from 'react';
import { FlatList, View, type ListRenderItem } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../../reduxstore/hooks';
import {
  removeTodo,
  updateTodo,
  Todo,
} from '../../../reduxstore/slices/TodoSlice';
import { TextConstants } from '../../../constants/text';
import useLocalAuthentication from '../../../hooks/useLocalAuthentication';
import TodoItemRow from '../../molecules/TodoItemRow';
import ListEmptyView from '../../atoms/ListEmptyView';

const TodoListSection = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(state => state.todos);
  const { authenticateAndRun } = useLocalAuthentication();

  const renderItem: ListRenderItem<Todo> = useCallback(
    ({ item }) => {
      const handleUpdate = (text: string) =>
        authenticateAndRun(() => dispatch(updateTodo({ id: item.id, text })), {
          promptMessage: TextConstants.AUTHENTICATION_PROMPT_UPDATE,
        });

      const handleRemove = (id: string) =>
        authenticateAndRun(() => dispatch(removeTodo(id)), {
          promptMessage: TextConstants.AUTHENTICATION_PROMPT_DELETE,
        });

      return (
        <TodoItemRow
          todo={item}
          onUpdate={handleUpdate}
          onRemove={handleRemove}
        />
      );
    },
    [authenticateAndRun, dispatch],
  );

  return (
    <View className="flex-1 px-4 py-4">
      <FlatList<Todo>
        data={todos}
        keyExtractor={todo => todo.id}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyView}
      />
    </View>
  );
};

export default TodoListSection;
