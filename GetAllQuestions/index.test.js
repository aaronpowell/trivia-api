const httpFunction = require('./index');
const context = require('../testing/defaultContext')

test('Http trigger should return known text', async () => {

    const request = {
        query: { }
    };

    await httpFunction(context, request);

    expect(context.res.body.length).toBe(10);
});