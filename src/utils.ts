type ListItem = {
  name: string;
  age?: number | null;
};
const list: ListItem[] = [];

const getMessage = (): string => 'Hello world!';

const addToList = (item: ListItem): string | ListItem[] => {
  const { name, age } = item;

  if (!name) {
    return 'Name is required';
  }

  if (age && age < 18) {
    return 'Need to be over 18';
  }

  if (age && age > 100) {
    return 'Invalid age given';
  }

  list.push(item);

  return list;
};

export { getMessage, addToList };
