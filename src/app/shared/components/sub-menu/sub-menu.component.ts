import { Component, OnInit, Input } from '@angular/core';
import { MenuItemI } from '../../interfaces/menu-item-i';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {

  @Input() menuItems: MenuItemI[];
  constructor() { }

  ngOnInit() {
  }

}
