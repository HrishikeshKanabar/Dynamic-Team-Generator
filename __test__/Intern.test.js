const Intr = require("../lib/Intern");

test('create a Intrloyee',()=>{

    const Intry = new Intr("testname",4,"testemail","USchool");

    expect(Intry.name).toEqual(expect.any(String));
    expect(Intry.id).toEqual(expect.any(Number));
    expect(Intry.email).toEqual(expect.any(String));
    expect(Intry.school).toEqual(expect.any(String));
});


test('test getName',()=>{

    const Intry = new Intr("testname",4,"testemail","USchool");
    expect(Intry.getName()).toEqual(expect.any(String));

});


test('test getId',()=>{

    const Intry = new Intr("testname",4,"testemail","USchool");
    expect(Intry.getId()).toEqual(expect.any(Number));

});

test('test getEmail',()=>{

    const Intry = new Intr("testname",4,"testemail","USchool");
    expect(Intry.getEmail()).toEqual(expect.any(String));

});

test('test getGSchool',()=>{

    const Intry = new Intr("testname",4,"testemail","USchool");
    expect(Intry.getSchool()).toEqual(expect.any(String));

});

test('test getRole',()=>{

    const Intry = new Intr("testname",4,"testemail","USchool");
    expect(Intry.getRole()).toEqual("Intern");

});