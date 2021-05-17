'use strict';

const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.server);

describe('server',() => {
  it('should get 404 status', async() => {
    const res = await request.post('/person');
    expect(res.status).toBe(404);
  });
  it('should get a 500 status', async() => {
    const res = await request.get('/person?name=');
    expect(res.status).toBe(500);
  });

  it('should get a 200 status', async() => {
    const res = await request.get('/person?name=hihussein');
    expect(res.status).toBe(200);
    expect(res.text).toBe('{"name":"hihussein"}');
  });
});
