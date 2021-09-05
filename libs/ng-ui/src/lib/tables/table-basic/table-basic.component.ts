import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'bwl-table-basic',
  template: `
    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th *ngFor="let schema of schemas"
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {{ schema.label }}
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200" *ngIf="entities$ | async as entities">
          <tr *ngFor="let entity of entities">
            <td *ngFor="let schema of schemas"
              class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
            >
              {{ entity.attributes[schema.key] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [],
})
export class TableBasicComponent implements OnInit {
  @Input() schemas: TableBasicSchema[] = []
  @Input() entities$ = new Observable<any>()

  constructor() {}

  ngOnInit(): void {}
}

export interface TableBasicSchema {
  key: string;
  label: string;
}