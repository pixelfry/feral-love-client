import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthsToYears',
})
export class MonthsToYearsPipe implements PipeTransform {
  transform(value: number): string {
    if (isNaN(value) || value < 0) {
      return "Invalid input";
    }

    const years = Math.floor(value / 12);
    const months = value % 12;

    let result = '';
    if (years > 0) {
      result += years + ' year' + (years > 1 ? 's' : '') + ' ';
    }
    if (months > 0) {
      result += months + ' month' + (months > 1 ? 's' : '');
    }

    return result.trim();
  }
}
