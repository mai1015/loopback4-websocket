import {BindingKey, CoreBindings} from '@loopback/core';
import {WebsocketComponent} from './component';

/**
 * Binding keys used by this component.
 */
export namespace WebsocketComponentBindings {
  export const COMPONENT = BindingKey.create<WebsocketComponent>(
    `${CoreBindings.COMPONENTS}.WebsocketComponent`,
  );
}
