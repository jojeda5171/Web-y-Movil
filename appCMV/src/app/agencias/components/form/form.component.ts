import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ɵInjectableAnimationEngine } from '@angular/platform-browser/animations';

@Component({
  selector: 'cmv-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title = "";
  group!: FormGroup;

  constructor(private reference: MatDialogRef<FormComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data ? "EDITAR" : "NUEVO";
  }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.group = new FormGroup({
      id: new FormControl(this.data?._id),
      name: new FormControl(this.data?.name, Validators.required),
      address: new FormControl(this.data?.address, Validators.required)
    });
  }

  save() {
    const record = this.group.value;
    this.reference.close(record);
  }

}
