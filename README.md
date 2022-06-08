# ioredis-parse-adapter

parse-server adapter for ioredis

# Installation

`npm install --save ioredis-parse-adapter`

# Usage
```js
const parseServer = new ParseServer({

    /// Other options

    liveQuery: {
        pubSubAdapter: new IORedisAdapter(process.env.REDIS_URL)
    };
});
```
