const UserService = require('../../services/User')


describe('UserServices', () => {
    test('Should have the methods signature', () => {
        expect(UserService.list).not.toBe(undefined);
        expect(UserService.getId).not.toBe(undefined);
        expect(UserService.delete).not.toBe(undefined);
        expect(UserService.insert).not.toBe(undefined);
        expect(UserService.update).not.toBe(undefined);
    });
});