const Eng = require("../lib/Engineer");

test('create a Engloyee',()=>{

    const Engy = new Eng("testname",4,"testemail","gitUser");

    expect(Engy.name).toEqual(expect.any(String));
    expect(Engy.id).toEqual(expect.any(Number));
    expect(Engy.email).toEqual(expect.any(String));
    expect(Engy.github).toEqual(expect.any(String));
});


test('test getName',()=>{

    const Engy = new Eng("testname",4,"testemail","gitUser");
    expect(Engy.getName()).toEqual(expect.any(String));

});


test('test getId',()=>{

    const Engy = new Eng("testname",4,"testemail","gitUser");
    expect(Engy.getId()).toEqual(expect.any(Number));

});

test('test getEmail',()=>{

    const Engy = new Eng("testname",4,"testemail","gitUser");
    expect(Engy.getEmail()).toEqual(expect.any(String));

});

test('test getGitHub',()=>{

    const Engy = new Eng("testname",4,"testemail","gitUser");
    expect(Engy.getGithub()).toEqual(expect.any(String));

});

test('test getRole',()=>{

    const Engy = new Eng("testname",4,"testemail","gitUser");
    expect(Engy.getRole()).toEqual("Engineer");

});