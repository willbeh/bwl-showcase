import { Injectable } from '@angular/core';
import { Group } from '@bwl/data';
import { ParseBaseService } from './parse-base.service';

@Injectable()
export class GroupService extends ParseBaseService<Group> {
  constructor() {
    super("Group")
  }
}