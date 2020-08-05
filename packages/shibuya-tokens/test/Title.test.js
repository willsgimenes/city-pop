const app = require('../src/index');

it('should return title', () => {
    expect(app.Title).toEqual('Shibuya design tokens');
});