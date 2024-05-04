import {
  NgClass,
  NgFor,
} from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { zeccaList } from 'src/app/interfaces';

@Component({
  selector: 'app-zecca-dashboard',
  standalone: true,
  imports: [NgClass,  NgFor, RouterLink],
  templateUrl: './zecca-dashboard.component.html',
  styleUrl: './zecca-dashboard.component.css'
})
export class ZeccaDashboardComponent {
  components = zeccaList;

}
