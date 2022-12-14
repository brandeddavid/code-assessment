import type { ListItem } from './types';
import { addToListValidation } from './helpers/validation';

const list: ListItem[] = [];

const getMessage = (): string => 'Hello world!';

const addToList = (item: ListItem): string | ListItem[] => {
  const { name, age = null } = item;
  const validationError = addToListValidation(name, age);

  if (validationError) {
    return validationError;
  }

  list.push(item);

  return list;
};

export { getMessage, addToList };
