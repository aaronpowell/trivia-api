const httpFunction = require('./index');
const context = require('../testing/defaultContext')

test('Http trigger should return known text', async () => {

    const request = {
        query: { question: 'In web design, what does CSS stand for?', answer: 'Cascading Style Sheet' }
    };

    await httpFunction(context, request);

    console.log(context.res.body);

    expect(context.res.body).toEqual('That was correct!');
});
