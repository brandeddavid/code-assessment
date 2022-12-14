import type { Age } from '../types';

const addToListValidation = (name: string, age: Age): string => {
  if (!name) {
    return 'Name is required';
  }

  if (age && age < 18) {
    return 'Need to be over 18';
  }

  if (age && age > 100) {
    return 'Invalid age given';
  }

  return '';
};

export { addToListValidation };
