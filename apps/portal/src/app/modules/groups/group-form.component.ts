import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from '@bwl/data';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'bwl-group-form',
  template: `
    <bwl-header>New Group</bwl-header>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">

      <label for="first-name">Group Name </label>
      <input id="first-name" type="text" formControlName="name">
      
      <bwl-button-primary (click)="onSubmit()">Submit</bwl-button-primary>
    </form>
  `,
  styles: [
  ]
})
export class GroupFormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
  });
  entity?: Group;

  constructor(private service: GroupService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    if(id) {
      this.service.getById(id).then(group => {
        if(group) {
          this.entity = group
          this.form.patchValue(group)
        }
      })
    }
  }

  onSubmit() {
    if(this.form.valid){
      if(this.entity) {
        this.service.update(this.entity.id!, this.form.value).then(
          () => this.router.navigate(['/portal', 'groups'])
        ).catch(e => console.error('update error', e))
        console.log('form', this.form.value)
      } else {
        this.service.create(this.form.value).then(
          () => this.router.navigate(['/portal', 'groups'])
        ).catch(e => console.error('save error', e))
      }
      
    }
  }

}
