const Redis = require('ioredis')

class IORedisAdapter {
  constructor(config) {
    this.client = new Redis(config)
  }

  createPublisher() {
    return this.client
  }

  createSubscriber() {
    return this.client
  }
}

module.exports = IORedisAdapter
module.exports.default = IORedisAdapter
