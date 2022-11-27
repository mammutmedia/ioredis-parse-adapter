const IORedisAdapter = require('../src/index.js')

describe('IORedisAdapter tests', () => {
  it('should not throw when initialized properly', () => {
    expect(() => {
      // eslint-disable-next-line no-unused-vars
      const _ = new IORedisAdapter()
    }).not.toThrow()

    expect(() => {
      // eslint-disable-next-line no-unused-vars
      const _ = new IORedisAdapter(6379)
    }).not.toThrow()

    expect(() => {
      // eslint-disable-next-line no-unused-vars
      const _ = new IORedisAdapter({
        port: 6379,
        host: '127.0.0.1',
        username: 'default',
        db: 0
      })
    }).not.toThrow()

    expect(() => {
      // eslint-disable-next-line no-unused-vars
      const _ = new IORedisAdapter('redis://127.0.0.1:6379/4')
    }).not.toThrow()
  })

  it('should return subscription', () => {
    const subscriber = new IORedisAdapter().createSubscriber()
    expect(subscriber).not.toBeUndefined()
  })

  it('should return publisher', () => {
    const publisher = new IORedisAdapter().createPublisher()
    expect(publisher).not.toBeUndefined()
  })

  it('should connect to redis', async () => {
    const client = new IORedisAdapter().client
    const response = await client.ping()
    expect(response).toBe('PONG')
  })
})
