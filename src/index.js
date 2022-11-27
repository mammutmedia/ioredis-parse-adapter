const Redis = require('ioredis')

class IORedisAdapter {
  constructor(config) {
    this.pub = new Redis(config)
    this.sub = new Redis(config)
  }

  createPublisher() {
    return this.pub
  }

  createSubscriber() {
    return this.sub
  }
}

module.exports = IORedisAdapter
module.exports.default = IORedisAdapter
