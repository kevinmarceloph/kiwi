import { KiwiMetadataStorage } from '../metadata/metadataStorage';

export function MiddlewareError(order?: number) {
    return function decorator(object: Object) {
        KiwiMetadataStorage.middlewaresError.push({
            target: object,
            order: order == undefined? 0 : order
        })
    }
  }
