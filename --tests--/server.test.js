'use strict';

const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.server);

describe('server', () => {
  it('should get a 404 status', async() => {
    const res = await request.get('/dghjhdf');
    expect(res.status).toBe(404);
  });
});