import { requestData } from './request';

describe('user repos request', () => {
  it('should return user repos', async () => {
    const response = await requestData('davigsouza/repos');
    expect(response[0]).toHaveProperty('name');
  });

  it('should not return user repos', () => {
    expect(async () => {
      await requestData('somerandonusername/repos');
    }).rejects.toBeInstanceOf(Error);
  });
});