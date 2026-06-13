import { View } from 'react-native';
import { useAppDispatch } from '../reduxstore/hooks';
import { addTodo } from '../reduxstore/slices/TodoSlice';

import TodoListSection from '../components/organisms/TodoListSection';
import AddTodoRow from '../components/molecules/AddTodoRow';

const TodoList = () => {
  const dispatch = useAppDispatch();

  return (
    <View className="flex-1 bg-slate-50">
      <AddTodoRow onAdd={text => dispatch(addTodo(text))} />
      <TodoListSection />
    </View>
  );
};

export default TodoList;
