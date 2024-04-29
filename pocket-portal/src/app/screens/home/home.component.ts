import { Component } from '@angular/core';
import { zeccaList } from '../../interfaces/menuList';
import { NgClass, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass,  NgFor, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  components = zeccaList.filter((component) => !!component.card);

}
