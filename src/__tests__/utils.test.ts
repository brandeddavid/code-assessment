import * as utils from '../utils';
import { addToList } from '../utils';

describe('utils', () => {
  describe('utils#getMessage()', () => {
    it('should return a message', () => {
      const message = utils.getMessage();
      expect(message).toEqual('Hello world!');
    });
  });

  describe('utils#addToList()', () => {
    const validPayload = { name: 'Name', age: 20 };

    it('should return error if no name is provided', () => {
      const nameError = utils.addToList({ name: '', age: null });
      expect(nameError).toEqual('Name is required');
    });

    it('should return error if age below 18', () => {
      const ageError = utils.addToList({ name: 'Name', age: 17 });
      expect(ageError).toEqual('Need to be over 18');
    });

    it('should return error if age is above 100', () => {
      const ageError = utils.addToList({ name: 'Name', age: 101 });
      expect(ageError).toEqual('Invalid age given');
    });

    it('should handle successful add', () => {
      const response = utils.addToList(validPayload);
      expect(response.length).toEqual(1);
      expect(response[0]).toMatchObject(validPayload);
    });
  });
});
