
const Emp = require("../lib/Employee.js");

test('create a employee',()=>{

    const empy = new Emp("testname",4,"testemail");

    expect(empy.name).toEqual(expect.any(String));
    expect(empy.id).toEqual(expect.any(Number));
    expect(empy.email).toEqual(expect.any(String));
});


test('test getName',()=>{

    const empy = new Emp("testname",4,"testemail");
    expect(empy.getName()).toEqual(expect.any(String));

});


test('test getId',()=>{

    const empy = new Emp("testname",4,"testemail");
    expect(empy.getId()).toEqual(expect.any(Number));

});

test('test getEmail',()=>{

    const empy = new Emp("testname",4,"testemail");
    expect(empy.getEmail()).toEqual(expect.any(String));

});

test('test getRole',()=>{

    const empy = new Emp("testname",4,"testemail");
    expect(empy.getRole()).toEqual("Employee");

});