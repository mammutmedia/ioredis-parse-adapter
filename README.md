# ioredis-parse-adapter

parse-server adapter for ioredis

## Installation

`npm install --save ioredis-parse-adapter`

## Usage

Redis single node or Redis sentinel configuration:

```js
const parseServer = new ParseServer({

    /// Other options

    liveQuery: {
        pubSubAdapter: new IORedisAdapter(process.env.REDIS_URL)
    };
});
```

Redis Cluster configuration:

```js
const parseServer = new ParseServer({

    /// Other options

    liveQuery: {
        pubSubAdapter: new IORedisAdapter({
          cluster: {
            nodes: process.env.REDIS_CLUSTER_NODES.split(','),
            options: {
              redisOptions: {
                password: process.env.REDIS_PASSWORD,
              },
            }
          }
        })
    };
});
```

You can pass any option that [ioredis](https://github.com/luin/ioredis) supports.
You may have a look at their documentation.
