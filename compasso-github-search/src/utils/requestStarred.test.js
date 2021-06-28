import { requestData } from './request';

describe('user starred repos request', () => {
  it('should return starred repos', async () => {
    const response = await requestData('davigsouza/starred');
    expect(response[0]).toHaveProperty('name');
  });

  it('should not return starred repos', () => {
    expect(async () => {
      await requestData('somerandonusername/starred');
    }).rejects.toBeInstanceOf(Error);
  });
});