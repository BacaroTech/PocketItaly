import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-factory-page-layout',
  standalone: true,
  imports: [],
  templateUrl: './factory-page-layout.component.html',
  styleUrl: './factory-page-layout.component.css'
})
export class FactoryPageLayoutComponent {
  @Input()
  title!: string;

  @Input()
  subTitle!: string;

}
