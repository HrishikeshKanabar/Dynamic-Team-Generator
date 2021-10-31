// Manager class
const { Module } = require("module");
const Emp = require("./Employee");

class Manager extends Emp {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;
  }

  getOfficeNum() {
    return this.officeNum;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
