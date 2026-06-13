jest.mock('react-native-uuid', () => ({
  __esModule: true,
  default: {
    v4: jest.fn(() => 'todo-id-1'),
  },
}));

jest.mock('expo-local-authentication', () => ({
  hasHardwareAsync: jest.fn(),
  isEnrolledAsync: jest.fn(),
  authenticateAsync: jest.fn(),
}));

import { runAuthenticatedAction } from '../src/hooks/useLocalAuthentication';
import reducer, {
  addTodo,
  removeTodo,
  updateTodo,
} from '../src/reduxstore/slices/TodoSlice';

// This test suite verifies the functionality of the todo slice in our Redux store.
// It checks that we can
// 1. add, 2. update, and 3. remove todo items correctly.
// Each test simulates an action being dispatched to the reducer and then asserts that the resulting state matches our expectations.

// Command to run: npm test -- TodoSlice.test.ts
describe('todo slice', () => {
  it('authenticates before adding a todo item', async () => {
    const authenticateMock = jest.fn(async () => true);
    let nextState = reducer(undefined, {
      type: 'todos/empty',
    });

    const actionMock = jest.fn(() => {
      nextState = reducer(undefined, addTodo('Buy groceries'));
    });

    const isSuccessful = await runAuthenticatedAction(
      authenticateMock,
      actionMock,
      {
        promptMessage: 'Authenticate to add a todo',
      },
    );

    expect(authenticateMock).toHaveBeenCalledWith({
      promptMessage: 'Authenticate to add a todo',
    });
    expect(actionMock).toHaveBeenCalledTimes(1);
    expect(nextState).toEqual([
      {
        id: 'todo-id-1',
        description: 'Buy groceries',
        completed: false,
      },
    ]);
    expect(isSuccessful).toBe(true);
  });

  it('updates a todo item', () => {
    const initialState = [
      {
        id: 'todo-id-1',
        description: 'Buy milk',
        completed: false,
      },
    ];

    const nextState = reducer(
      initialState,
      updateTodo({ id: 'todo-id-1', text: 'Buy oat milk' }),
    );

    expect(nextState[0].description).toBe('Buy oat milk');
  });

  it('removes a todo item', () => {
    const initialState = [
      {
        id: 'todo-id-1',
        description: 'Buy groceries',
        completed: false,
      },
    ];

    const nextState = reducer(initialState, removeTodo('todo-id-1'));

    expect(nextState).toEqual([]);
  });
});
