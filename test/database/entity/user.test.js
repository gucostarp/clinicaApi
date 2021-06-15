const User = require('../../../database/entity/User')


describe('user', () => {
    test('Should have the user properties', () => {
        expect(User.options.columns.id).not.toBe(undefined);
        expect(User.options.columns.name).not.toBe(undefined);
        expect(User.options.columns.username).not.toBe(undefined);
        expect(User.options.columns.password).not.toBe(undefined);
    });
});