import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

import { FactoryPageLayoutComponent } from 'src/app/components';
import {
  CountStep,
  DocsStore,
} from 'src/app/interfaces';
import { FormFactoryUtils } from 'src/app/utils';

@Component({
  selector: 'app-factory-create-store',
  standalone: true,
  imports: [FactoryPageLayoutComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './factory-create-store.component.html',
  styleUrl: './factory-create-store.component.css'
})
export class FactoryCreateStoreComponent {

  createSuccess: boolean = false;
  step: CountStep = 1;
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
    'city': new FormControl(''),
    'cap': new FormControl(''),
    'photo': new FormControl<DocsStore | null>(null),
    'docs': new FormArray([]),
  });

  goNext() {
    this.step = FormFactoryUtils.next(this.step);
  }
  goBack() {
    this.step = FormFactoryUtils.back(this.step);
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

