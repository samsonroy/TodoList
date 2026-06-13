import { View } from 'react-native';
import { useAppDispatch } from '../reduxstore/hooks';
import { addTodo } from '../reduxstore/slices/TodoSlice';
import useLocalAuthentication from '../hooks/useLocalAuthentication';
import { TextConstants } from '../constants/text';

import TodoListSection from '../components/organisms/TodoListSection';
import AddTodoRow from '../components/molecules/AddTodoRow';

const TodoList = () => {
  const dispatch = useAppDispatch();
  const { authenticateAndRun } = useLocalAuthentication();

  const handleAddTodo = (text: string) =>
    authenticateAndRun(() => dispatch(addTodo(text)), {
      promptMessage: TextConstants.AUTHENTICATION_PROMPT_ADD,
    });

  return (
    <View className="flex-1 bg-slate-50">
      <AddTodoRow onAdd={handleAddTodo} />
      <TodoListSection />
    </View>
  );
};

export default TodoList;
