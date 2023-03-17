import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'av_timer' },
  { state: 'customer', type: 'link', name: 'Customer', icon: 'crop_7_5' },
  { state: 'agent', type: 'link', name: 'Agent Customer', icon: 'view_comfy' },
  { state: 'category', type: 'link', name: 'Category Customer', icon: 'view_list' },
  { state: 'label', type: 'link', name: 'Label', icon: 'view_headline' },
  { state: 'tabs', type: 'link', name: 'Tabs', icon: 'tab' },
  { state: 'stepper', type: 'link', name: 'Stepper', icon: 'web' },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
