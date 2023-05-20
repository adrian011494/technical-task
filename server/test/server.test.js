const app = require('../server');
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

describe('Server API Tests', () => {
  it('USER INFO: should respond with user information for a valid username', (done) => {
    const username = 'adrian011494';

    request(app)
      .get(`/users/${username}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        // Assert the response body or any other expectations
        expect(res.body.username).to.equal(username);

        done();
      });
  });

  it('USER INFO: should return 404 for an invalid username', (done) => {
    const username = 'nonexistentUser';

    request(app)
      .get(`/users/${username}`)
      .expect(404, done);
  });

  it('USER REPO: should respond with user repo for a valid username', (done) => {
    const username = 'adrian011494';

    request(app)
      .get(`/users/${username}/repo`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        // Assert the response body or any other expectations
        expect(res.body.username).to.equal(username);

        done();
      });
  });

  it('USER REPO: should return 404 for an invalid username', (done) => {
    const username = 'nonexistentUser';

    request(app)
      .get(`/users/${username}/repo`)
      .expect(404, done);
  });
});
