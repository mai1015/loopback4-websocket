import {
  Application,
  injectable,
  Component,
  config,
  ContextTags,
  CoreBindings,
  inject,
} from '@loopback/core';
import {WebsocketComponentBindings} from './keys'
import {DEFAULT_LOOPBACK4_WEBSOCKET_OPTIONS, WebsocketComponentOptions} from './types';

// Configure the binding for WebsocketComponent
@injectable({tags: {[ContextTags.KEY]: WebsocketComponentBindings.COMPONENT}})
export class WebsocketComponent implements Component {
  constructor(
    @inject(CoreBindings.APPLICATION_INSTANCE)
    private application: Application,
    @config()
    private options: WebsocketComponentOptions = DEFAULT_LOOPBACK4_WEBSOCKET_OPTIONS,
  ) {}
}
