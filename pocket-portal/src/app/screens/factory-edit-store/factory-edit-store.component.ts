import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import { FactoryPageLayoutComponent } from 'src/app/components';
import {
  CountStep,
  DocsStore,
  FactoryItemStore,
} from 'src/app/interfaces';
import { FactoryStoresService } from 'src/app/services';
import { FormFactoryUtils } from 'src/app/utils';

@Component({
  selector: 'app-factory-edit-store',
  standalone: true,
  imports: [FactoryPageLayoutComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './factory-edit-store.component.html',
  styleUrl: './factory-edit-store.component.css'
})
export class FactoryEditStoreComponent {

  id: number | undefined;
  store: FactoryItemStore | null | undefined = null;
  form = new FormGroup({
    'company-name': new FormControl(''),
    'vat': new FormControl(''),
    'address': new FormControl(''),
    'city': new FormControl(''),
    'province': new FormControl(''),
    'cap': new FormControl(''),
    'photo': new FormControl<DocsStore | null>(null),
    'docs': new FormArray([]),
  });
  createSuccess: boolean = false;
  step: CountStep = 1;
  readonly subTitleCreation = "Aggiorna i dati sulla tua attività";
  readonly subTitleCreated = "Operazione completata"
  get subTitle() {
    return this.createSuccess ? this.subTitleCreated : this.subTitleCreation;
  }
  imageSrc: string | ArrayBuffer | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: FactoryStoresService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = parseInt(params['id']);
      if (this.id) {
        this.service.getStores().subscribe((r) => {
          this.store = r.find(_rItem => _rItem.id === this.id);
          if (this.store) {
            this.form.patchValue({
              "company-name": this.store.name,
              "vat": this.store.vat,
              "address": this.store.address,
              "province": this.store.province,
              "city": this.store.city,
              "cap": this.store.cap,
              "photo": {
                id: 1,
                file: this.store.img,
                name: this.store.imgName
              }
            })
          }

        })
      }
    })
  }
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

  updateStore() {
    if (this.step == 2) {
      this.createSuccess = true;
    }
  }
}
