import { requestData } from './request';

describe('user data request', () => {
  it('should return user', async () => {
    const response = await requestData('davigsouza');
    expect(response).toHaveProperty('name');
  });

  it('should not return user ' , () => {
    expect(async () => {
      await requestData('somerandonusername');
    }).rejects.toBeInstanceOf(Error);
  });
});