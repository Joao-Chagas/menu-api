import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UpperCasePipe implements PipeTransform {
  private trimObject(object: Object): Object {
    Object.keys(object).forEach((prop) => {
      if (typeof object[prop] === 'string') {
        object[prop] = object[prop].toUpperCase();
      }
    });

    return object;
  }

  transform(value: string | Object, _: ArgumentMetadata) {
    if (typeof value === 'object') {
      return this.trimObject(value);
    } else if (typeof value === 'string') {
      return value.toUpperCase();
    }

    return value;
  }
}
