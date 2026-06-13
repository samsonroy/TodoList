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
  AUTHENTICATION_PROMPT_ADD = 'Please authenticate to add a todo',
  AUTHENTICATION_PROMPT_UPDATE = 'Please authenticate to update a todo',
  AUTHENTICATION_PROMPT_DELETE = 'Please authenticate to delete a todo',
  DEFAULT_FALLBACK_LABEL = 'Use device passcode',
  BIOMETRIC_UNAVAILABLE_TITLE = 'Biometric unavailable',
  BIOMETRIC_UNAVAILABLE_MESSAGE = 'Enable Face ID or Touch ID on a real device to continue.',
}
