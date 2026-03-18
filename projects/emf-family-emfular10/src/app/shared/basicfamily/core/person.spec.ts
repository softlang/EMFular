import { Woman } from '../core/woman';
import { Man } from '../core/man';

describe('Persons', () => {
  it('should create a woman', () => {
    expect(new Woman()).toBeTruthy();
  });
  it('should create a man', () => {
    expect(new Man()).toBeTruthy();
  });
});
