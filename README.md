# loopback4-websocket

[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

## Installation

Install WebsocketComponent using `npm`;

```sh
$ npm install loopback4-websocket
```

## Basic Use

Configure and load WebsocketComponent in the application constructor
as shown below.

```ts
import {WebsocketComponent, WebsocketComponentOptions, DEFAULT_LOOPBACK4_WEBSOCKET_OPTIONS} from 'loopback4-websocket';
// ...
export class MyApplication extends BootMixin(ServiceMixin(RepositoryMixin(RestApplication))) {
  constructor(options: ApplicationConfig = {}) {
    const opts: WebsocketComponentOptions = DEFAULT_LOOPBACK4_WEBSOCKET_OPTIONS;
    this.configure(WebsocketComponentBindings.COMPONENT).to(opts);
      // Put the configuration options here
    });
    this.component(WebsocketComponent);
    // ...
  }
  // ...
}
```
