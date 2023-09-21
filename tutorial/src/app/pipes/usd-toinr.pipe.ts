import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToinr',
})
export class UsdToinrPipe implements PipeTransform {
  transform(value: number, ...args: number[]): number {
    const [price] = args;
    return value * price;
  }
}
