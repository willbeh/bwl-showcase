import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
            <th *ngIf="showEdit">
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200" *ngIf="entities$ | async as entities">
          <tr *ngFor="let entity of entities">
            <td *ngFor="let schema of schemas"
              class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
            >
              <ng-container [ngSwitch]="schema.type">
                <ng-container *ngSwitchCase="'date'">{{ entity[schema.key] | date:'dd MMM yyyy' }}</ng-container>

                <ng-container *ngSwitchDefault>{{ entity[schema.key] }}</ng-container>
              </ng-container>
              
            </td>
            <td *ngIf="showEdit" class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <div (click)="edit.emit(entity)" class="cursor-pointer text-indigo-600 hover:text-indigo-900">Edit</div>
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
  @Input() showEdit = false
  
  @Output() edit = new EventEmitter()

  constructor() {}

  ngOnInit(): void {}
}

export interface TableBasicSchema {
  key: string;
  label: string;
  type?: 'date';
}