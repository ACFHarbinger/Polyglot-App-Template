import { describe, expect, it } from 'vitest';

describe('unit placeholder', () => {
  it('keeps the unit suite wired until real modules land', () => {
    expect(1 + 1).toBe(2);
  });
});
