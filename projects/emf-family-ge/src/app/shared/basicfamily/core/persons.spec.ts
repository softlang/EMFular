import {Man, Woman} from './persons';

describe('Persons', () => {
  it('should create a woman', () => {
    expect(new Woman()).toBeTruthy();
  });
  it('should create a man', () => {
    expect(new Man()).toBeTruthy();
  });
});
