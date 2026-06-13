import { useCallback } from 'react';
import { FlatList, View, type ListRenderItem } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../../reduxstore/hooks';
import {
  removeTodo,
  updateTodo,
  Todo,
} from '../../../reduxstore/slices/TodoSlice';
import TodoItemRow from '../../molecules/TodoItemRow';
import ListEmptyView from '../../atoms/ListEmptyView';

const TodoListSection = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(state => state.todos);

  const renderItem: ListRenderItem<Todo> = useCallback(
    ({ item }) => (
      <TodoItemRow
        todo={item}
        onUpdate={text => dispatch(updateTodo({ id: item.id, text }))}
        onRemove={id => dispatch(removeTodo(id))}
      />
    ),
    [dispatch],
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
