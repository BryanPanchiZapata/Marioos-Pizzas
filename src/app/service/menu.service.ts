import { Injectable } from '@angular/core';
import { Menu_list } from '../interface/menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  listmenu: Menu_list[] = [
    {
      tittle_menu: 'CLÁSICA',
      description_menu: 'Jamón y queso',
      price_menu:
        'Porciones 4 pedazos $2.25 | Porciones 16 pedazos $9.50 | Porciones 32 pedazos $19',
    },
    {
      tittle_menu: 'IDEAL',
      description_menu: 'Jamón y champiñón',
      price_menu:
      'Porciones 4 pedazos $2.50 | Porciones 16 pedazos $10 | Porciones 32 pedazos $20',
    },
    {
      tittle_menu: 'NAPOLITANA',
      description_menu: 'Jamón y rodajas de tomate',
      price_menu:
        'Porciones 4 pedazos $2.50 | Porciones 16 pedazos $10 | Porciones 32 pedazos $20',
    },
    {
      tittle_menu: 'ITALIANA',
      description_menu: 'Queso y pepperoni',
      price_menu:
        'Porciones 4 pedazos $2.50 | Porciones 16 pedazos $10 | Porciones 32 pedazos $20',
    },
    {
      tittle_menu: 'RANCHERITO',
      description_menu: 'Tocino y jamón',
      price_menu:
        'Porciones 4 pedazos $2.50 | Porciones 16 pedazos $10 | Porciones 32 pedazos $20',
    },
    {
      tittle_menu: 'VEGETARIANA',
      description_menu: 'Champiñón, pimiento y rodajas de tomate',
      price_menu:
        'Porciones 4 pedazos $2.50 | Porciones 16 pedazos $10 | Porciones 32 pedazos $20',
    },
    {
      tittle_menu: 'HAWAIANA',
      description_menu: 'Queso, jamón y piña',
      price_menu:
        'Porciones 4 pedazos $2.50 | Porciones 16 pedazos $10 | Porciones 32 pedazos $20',
    },
    {
      tittle_menu: 'DE HIGO',
      description_menu: 'Queso e higo',
      price_menu:
        'Porciones 4 pedazos $2.50 | Porciones 16 pedazos $10 | Porciones 32 pedazos $20',
    },
    {
      tittle_menu: 'MIXTA',
      description_menu: 'Jamón, salami, tocino y pepperoni',
      price_menu:
        'Porciones 4 pedazos $2.50 | Porciones 16 pedazos $10 | Porciones 32 pedazos $20',
    },
    {
      tittle_menu: 'VULCANO',
      description_menu: 'Tocino, champiñón, pimiento rojo y verde',
      price_menu:
        'Porciones 4 pedazos $2.50 | Porciones 16 pedazos $10 | Porciones 32 pedazos $20',
    },
    {
      tittle_menu: 'SUPER CARNES',
      description_menu: 'Salchicha, jamón, salami y pepperoni',
      price_menu:
        'Porciones 4 pedazos $2.50 | Porciones 16 pedazos $10 | Porciones 32 pedazos $20',
    },
    {
      tittle_menu: 'MARIOO´S PIZZA',
      description_menu: 'Jamón, champiñón, tocino, salchicha y cebolla',
      price_menu:
        'Porciones 4 pedazos $2.50 | Porciones 16 pedazos $10 | Porciones 32 pedazos $20',
    },
  ];

  constructor() {}
  getMenu(){
    return this.listmenu
  }
}
