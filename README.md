## Running the app

```bash
# installation
$ npm install

# dev
$ npm run start:dev
```

## Open http://127.0.0.1:3000/auth?username=1&password=2

The terminal get

```
[Nest] 97700   - 2020-12-01 16:54:08   [ExceptionsHandler] Cannot read property 'url' of undefined +63436ms
TypeError: Cannot read property 'url' of undefined
    at AuthService.getSession (/Users/lipan/project/dist/auth/auth.service.js:25:38)
    at LocalStrategy.validate (/Users/lipan/project/dist/auth/strategy/local.strategy.js:28:40)
    at processTicksAndRejections (internal/process/task_queues.js:97:5)
```
