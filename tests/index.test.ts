import { greet } from '../src/index';

describe('greet function', () => {
  it('should return a greeting message', () => {
    const result = greet('Node Forge');
    expect(result).toBe('Goodbye, Node Forge!');
  });
});
