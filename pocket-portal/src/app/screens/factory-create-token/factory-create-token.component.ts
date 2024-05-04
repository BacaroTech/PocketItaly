import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

import { FactoryPageLayoutComponent } from 'src/app/components';
import {
  DocsStore,
  FactoryCreateTokenItem,
} from 'src/app/interfaces';

const mock: FactoryCreateTokenItem = {
  productName: "Sneakers Bruce",
  category: "Scarpe",
  description: "Sneakrs stringata con suola running",
  serial: "DGR345HJ89LHF",
  photo: "/assets/img/placeholder-item.png"
}
type TokenCreateResult = "success" | "fail" | "form" | "detail";

@Component({
  selector: 'app-factory-create-token',
  standalone: true,
  imports: [
    FactoryPageLayoutComponent, 
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './factory-create-token.component.html',
  styleUrl: './factory-create-token.component.css'
})
export class FactoryCreateTokenComponent {

  status: TokenCreateResult = "form";
  itemDetail = mock;
  form = new FormGroup({
    'productName': new FormControl(''),
    'category': new FormControl(''),
    'description': new FormControl(''),
    'serial': new FormControl(''),
    'photo': new FormControl<DocsStore | null>(null),
  });

  imageSrc: string | ArrayBuffer | null = null;

  createToken() {
    this.status = "detail";
  }
  confirm() {
    this.status = "success";
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
}
