import { from, Observable } from "rxjs";
import { map, take } from "rxjs/operators";

import * as Parse from 'parse';

// We need a base Entity interface that our models will extend
interface Entity {
  id?: string; // Optional for new entities
}

export class ParseBaseService<T extends Entity> {
  ParseObject;

  constructor(po: any) {
    this.ParseObject = Parse.Object.extend(po);
  }

  fetch(): Observable<T[]> {
    const query = new Parse.Query(this.ParseObject);
    return from(query.find()).pipe(
      take(1),
      map(entities => entities.map(
        entity => ({id: entity.id, ...entity.attributes} as T)
      ))
    );
  }

  async getById(id: string): Promise<T | null> {
    const query = new Parse.Query(this.ParseObject);
    const entity = await query.get(id)
    return entity ? ({id: entity.id, ...entity.attributes} as T) : null
  } 

  async count(): Promise<number> {
    const query = new Parse.Query(this.ParseObject);
    return query.count()
  }

  async create(entity: T) {
    const group: Parse.Object = new this.ParseObject();

    return group.save(entity)
  }

  async update(id: string, entity: T) {
    const query = new Parse.Query(this.ParseObject);
    const obj = await query.get(id)
    obj.save(entity)
  }
}