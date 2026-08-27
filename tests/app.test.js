const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('returns HTTP 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });

  it('contains "DevDeploy Demo App"', async () => {
    const res = await request(app).get('/');
    expect(res.text).toContain('DevDeploy Demo App');
  });
});

describe('GET /health', () => {
  it('returns HTTP 200', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
  });

  it('returns status "ok"', async () => {
    const res = await request(app).get('/health');
    expect(res.body).toEqual({ status: 'ok' });
  });
});
