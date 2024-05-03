import {
  AsyncPipe,
  NgClass,
  NgIf,
} from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

import { SanitizeHtmlPipe } from '../../pipes';
import { SidebarService } from '../../services';
import { paramNotNull } from '../../utils/param.util';
import { BadgeComponent } from '../badge';
import { BaseComponent } from '../base.component';
import * as properties from './sidebar-item.theme';

@Component({
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    RouterLink,
    RouterLinkActive,
    SanitizeHtmlPipe,
    AsyncPipe,
    BadgeComponent,
  ],
  selector: 'flowbite-sidebar-item-btn',
  templateUrl: './sidebar-item-btn.component.html',
})
export class SidebarItemComponentBtn extends BaseComponent {
  protected override contentClasses?: Record<
    keyof properties.SidebarItemClass,
    string
  >;
  //#region properties
  protected $icon?: string;
  protected $link?: string;
  protected $label?: string;
  protected $customStyle: Partial<properties.SidebarItemBaseTheme> = {};
  //#endregion
  //#region getter/setter
  /** @default undefined */
  public get icon(): string | undefined {
    return this.$icon;
  }
  @Input() public set icon(value: string | undefined) {
    this.$icon = value;
    this.fetchClass();
  }

  /** @default undefined */
  public get link(): string | undefined {
    return this.$link;
  }
  @Input() public set link(value: string | undefined) {
    this.$link = value;
    this.fetchClass();
  }

  /** @default undefined */
  public get label(): string | undefined {
    return this.$label;
  }
  @Input() public set label(value: string | undefined) {
    this.$label = value;
    this.fetchClass();
  }

  /** @default {} */
  public get customStyle(): Partial<properties.SidebarItemBaseTheme> {
    return this.$customStyle;
  }
  @Input() public set customStyle(
    value: Partial<properties.SidebarItemBaseTheme>,
  ) {
    this.$customStyle = value;
    this.fetchClass();
  }

  @Output() 
  click: EventEmitter<any> = new EventEmitter();
  //#endregion

  constructor(readonly sidebarService: SidebarService) {
    super();
  }

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    if (paramNotNull(this.$customStyle)) {
      const propertyClass = properties.getClasses({
        icon: this.$icon,
        link: this.$link,
        label: this.$label,
        customStyle: this.$customStyle,
      });

      this.contentClasses = propertyClass;
    }
  }
  //#endregion

  onClick(event: any) {
    this.click.emit(event);
  }
}
