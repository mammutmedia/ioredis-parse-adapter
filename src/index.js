const Redis = require('ioredis')

/* It creates a new Redis client for both publishing and subscribing, and returns them when requested */
class IORedisAdapter {
  /**
   * The constructor function creates a new instance of the Redis class, and assigns it to the pub and sub properties of
   * the RedisPubSub class
   * @param config - The configuration object for the Redis client.
   */
  constructor(config) {
    if (!config) {
      throw new Error('No config provided')
    }

    if (config.cluster && config.cluster.nodes) {
      this.pub = new Redis.Cluster(config.cluster.nodes, config.cluster.options)
      this.sub = new Redis.Cluster(config.cluster.nodes, config.cluster.options)
    } else {
      this.pub = new Redis(config)
      this.sub = new Redis(config)
    }
  }

  /**
   * It returns a new instance of the Publisher class
   * @returns The publisher
   */
  createPublisher() {
    return this.pub
  }

  /**
   * It returns a new subscriber object
   * @returns The subscriber object
   */
  createSubscriber() {
    return this.sub
  }
}

module.exports = IORedisAdapter
module.exports.default = IORedisAdapter
