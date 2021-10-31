const Mang = require("../lib/Manager");

test('create a Mangloyee',()=>{

    const Mangy = new Mang("testname",4,"testemail",45);

    expect(Mangy.name).toEqual(expect.any(String));
    expect(Mangy.id).toEqual(expect.any(Number));
    expect(Mangy.email).toEqual(expect.any(String));
    expect(Mangy.officeNum).toEqual(expect.any(Number));
});


test('test getName',()=>{

    const Mangy = new Mang("testname",4,"testemail",45);
    expect(Mangy.getName()).toEqual(expect.any(String));

});


test('test getId',()=>{

    const Mangy = new Mang("testname",4,"testemail",45);
    expect(Mangy.getId()).toEqual(expect.any(Number));

});

test('test getEmail',()=>{

    const Mangy = new Mang("testname",4,"testemail",45);
    expect(Mangy.getEmail()).toEqual(expect.any(String));

});

test('test getOfficeNum',()=>{

    const Mangy = new Mang("testname",4,"testemail",45);
    expect(Mangy.getOfficeNum()).toEqual(expect.any(Number));

});

test('test getRole',()=>{

    const Mangy = new Mang("testname",4,"testemail",45);
    expect(Mangy.getRole()).toEqual("Manager");

});