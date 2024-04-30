import { Component } from '@angular/core';
import { FactoryPageLayoutComponent } from '../../components/factory-page-layout/factory-page-layout.component';
import { ReactiveFormsModule, FormGroup, FormControl, FormArray } from '@angular/forms';
import { CommonModule, NgSwitch } from '@angular/common';

type CountStep = 1 | 2;
type DocsUpload = {
  name: string;
  file: any
}


@Component({
  selector: 'app-factory-create-store',
  standalone: true,
  imports: [FactoryPageLayoutComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './factory-create-store.component.html',
  styleUrl: './factory-create-store.component.css'
})
export class FactoryCreateStoreComponent {

  createSuccess: boolean = false;
  step: CountStep = 2;
  readonly subTitleCreation = "Completa il form per registrare un nuovo negozio";
  readonly subTitleCreated = "Operazione completata"
  get subTitle() {
    return this.createSuccess ? this.subTitleCreated : this.subTitleCreation;
  }
  imageSrc: string | ArrayBuffer | null = null;

  form = new FormGroup({
    'company-name': new FormControl(''),
    'vat': new FormControl(''),
    'address': new FormControl(''),
    'province': new FormControl(''),
    'cap': new FormControl(''),
    'photo': new FormControl<DocsUpload | null>(null),
    'docs': new FormArray([]),
  });

  goNext() {
    this.step = _next(this.step);
  }
  goBack() {
    this.step = _back(this.step);
  }
  onPhotoPicked(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    if (!files || files.length === 0) {
      return;
    }
    const file = files[0];
    if (file) {
      this.form.patchValue({
        photo: {
          name: file.name,
          file: file
        }
      });
      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(file);
    }
  }

  onDocsPicked(event: Event) {
    console.log("onDocksPicked", event)
    const files = (event.target as HTMLInputElement).files;
    if (!files || files.length === 0) {
      return;
    }
    const file = files[0];
    if (file) {
      // this.form.patchValue({ docs: file});
      const docs = this.form.get('docs') as FormArray;
      docs.push({ name: file.name, file: file })

    }
  }
  getValue(items: any) {
    console.log(JSON.stringify(items))
    return items['name']
  }

  addStore() {
    if (this.step == 2) {
      this.createSuccess = true;
    }
  }
}
function _next(step: CountStep): CountStep {
  switch (step) {
    case 1:
      return 2;
    case 2:
      return 2;
  }
}
function _back(step: CountStep): CountStep {
  switch (step) {
    case 1:
      return 1;
    case 2:
      return 1;
  }
}
