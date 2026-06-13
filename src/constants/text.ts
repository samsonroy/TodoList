// Ideally, the best way is to have a localization system in place,
// but for the sake of simplicity,
// we will just use a constants file to store all the text used in the app.
// This way, we can easily change the text in one place if needed.

export enum TextConstants {
  ADD_TODO_PLACEHOLDER = 'Enter a new todo item',
  ADD_TODO_BUTTON = 'Add',
  NO_TODOS_MESSAGE = 'No todos yet. Add your first item above.',
  UPDATE_TODO_BUTTON = 'Update',
  SAVE_TODO_BUTTON = 'Save',
  DELETE_TODO_BUTTON = 'Delete',
}
