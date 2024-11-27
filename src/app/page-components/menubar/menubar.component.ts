import { Component, HostListener, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [
    ButtonModule,
    TabMenuModule,
    TabViewModule,
    CommonModule
  ],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss'
})
export class MenubarComponent implements OnInit {
  items: MenuItem[] | undefined;
  testItems: MenuItem[] | undefined;

  shouldBeVisible: boolean = false;
  activeItem: MenuItem | undefined;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      this.checkMenu();
    });
  }

  ngOnInit(): void {
    this.items = [
      { label: 'Home', icon: 'pi pi-home', routerLink: 'home'},
      { label: 'Skills', icon: 'pi pi-chart-line', routerLink: 'skills' },
      { label: 'Showcase', icon: 'pi pi-th-large', routerLink: 'showcase' },
    ];
    console.log('oninit');
  }
  

  checkMenu() {
    const checkableUrls = ['/home', '/', ''];
    if (checkableUrls.includes(this.router.url)) {
      console.log('home');
      if (window.scrollY > 450) {
        this.shouldBeVisible = true;
      } else {
        this.shouldBeVisible = false;
      }
    } else {
      console.log('not home');
      this.shouldBeVisible = true;
    }
    
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.checkMenu();
  }
}
