// Imports the server.js file to be tested.
let server = require("../server");
//Assertion (Test Driven Development) and Should, Expect(Behaviour driven development) library
let chai = require("chai");
// Chai HTTP provides an interface for live integration testing of the API's.
let chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp);
const { expect } = chai;
var assert = chai.assert;




describe("Server!", () => {

    // Sample test case given to test / endpoint.
    it("Returns the default welcome message", done => {
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.status).to.equals("success");
          assert.strictEqual(res.body.message, "Welcome!");
          done();
        });
    });

    // Please add your test cases here.

    //Is Array, Is not Zero
    it("Returns Array", done => {
      chai
        .request(server)
        .get("/operations")
        .end((err, res) => {
          expect(res.body).to.be.an('array');
          expect(res.body).to.have.lengthOf.at.least(1);
          console.log("Test1");
          done();
        });
    });

    //Has Property 1
    it("Has the Correct Properties, id equal to 1", done => {
      chai
        .request(server)
        .get("/operations/1")
        .end((err, res) => {
          expect(res.body.id).to.equal(1);
          expect(res.body).to.have.property('name');
          expect(res.body).to.have.property('sign');
          console.log("Test2");
          done();
        });
    });

    //Has Property 2, adding new operation
    it("Has the Correct Properties, id equal to 4", done => {
      chai
        .request(server)
        .post("/operations")
        .send({name: 'Stormcloud', sign: '&'})
        .end((err, res) => {
          expect(res.body.id).to.equal(4);
          expect(res.body).to.have.property('name');
          expect(res.body).to.have.property('sign');
          console.log("Test3");
          done();
        });
    });



  });
