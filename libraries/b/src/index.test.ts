import { main } from './index'
describe('test index', () => {
    it('should load polkadot', () => {
        expect(main()).toBe('Woss')
    });
});
