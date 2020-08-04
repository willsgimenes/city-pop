const app = require('../src/index');

global.Math.random = () => 0;

it('when randoming quotes and get 0 index should return correct quote', () => {
    expect(app.getQuote()).toEqual('あきれるほどに I sing for you 伝えたい この夏が終わる前に');
});