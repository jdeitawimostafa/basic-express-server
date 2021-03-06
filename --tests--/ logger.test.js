'use strict';

const logger = require('../src/middleware/logger.js');

describe('logger midleware',() => {
  let consoleSpy;
  const req = {method:'get', path:'test'};
  const res = {};
  const next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console,'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should log all get requests', () => {
    logger(req,res,next);
    expect(consoleSpy).toHaveBeenCalledWith('Request information','get','test');
    expect(next).toHaveBeenCalledWith();
  });
});