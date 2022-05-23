import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/service/menu.service';
import { menu, Menu_list } from '../../interface/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menu = menu;
  listmenu: Menu_list[];
  constructor(private menuservice:MenuService) {
    this.listmenu=this.menuservice.getMenu();
  }

  ngOnInit(): void {}
}
