

const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {User} = require('./../models/user');

const {users, populateUsers} = require('./seed/seed');

//beforeEach(populateUsers);

describe('POST /users', () => {

  it('should sign up the user', (done) => {
      request(app)
        .post('/users')
        .send({
          email: users[0].email,
          password: users[0].password
        })
        .expect(200)
        .expect((res) => {
          expect(res.body.email).toBe(users[0].email);
          expect(res.body._id).toExist();

        }).end(done);
  });

  it('should fail email validation', (done) => {
    request(app)
      .post('/users')
      .send({
        email: "asdfsadf",
        password: "1"
      })
      .expect(200)
      .end(done);
  });
})
