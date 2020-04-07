const CuoreFactory = require('./cuore');

it('check',() => {
    const cuore = new CuoreFactory('')
    cuore.BPM = 80;
    expect(cuore.BPM).toBe(80);
})