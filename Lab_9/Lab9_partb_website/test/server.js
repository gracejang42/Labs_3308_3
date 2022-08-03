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


//Import complete


describe("Server!", () => {
      // Add your test cases here

      //(+) test case for /add: checks if the sum is a correct number
      it("Add Returns the Correct Sum", done => {
        chai
          .request(server)
          .post("/add")
          .send({num1:4,num2:2})
          .end((err, res) => {
            //expect(res.body);
            expect(res.body.sum).to.equal(6);
            console.log("Test1");
            done();
          });
      });
      //(-) Test case for add: checks if num1 and/or num2 are not numbers
      it("Add Catches Incorrect Data Types", done => {
        chai
          .request(server)
          .post("/add")
          .send({num1:'apple',num2:'plum'})
          .end((err, res) => {
            expect(res).to.have.status(405);
            //expect(res.body).to.equals("Not number");
            console.log("Test2");
            done();
          });
      });
      //(+) test case for /divide; check if input is numbers and quotient is correct
      it("Divide Returns Corrects Quotient", done => {
        chai
          .request(server)
          .post("/divide")
          .send({num1:4,num2:2})
          .end((err, res) => {
            //expect.(res.body);
            expect(res.body.q).to.equal(2);
            console.log("Test3");
            done();
          });
      });
      //(-) test case for /divide: check if num2 = 0 reports error
      it("Divide Catches Divide by Zero Error", done => {
        chai
          .request(server)
          .post("/divide")
          .send({num1:4,num2:0})
          .end((err, res) => {
            //expect.(res.body);
            expect(res).to.have.status(406);
            //expect(res.body).to.equals("DO NOT DIVIDE BY ZERO NOOOO");
            console.log("Test4");
            done();
          });
      });


});
