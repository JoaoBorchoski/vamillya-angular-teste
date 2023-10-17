import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoMenuItem, PoToolbarAction } from '@po-ui/ng-components';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent implements OnInit {
  public user: any;
  public actions: Array<PoToolbarAction> = [];
  public menus: Array<PoMenuItem> = [];
  public literals: any = {};

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.setUser();
    this.renderMenu();
    this.setActions();
  }

  setUser() {
    this.user = {
      id: '1',
      login: 'mail@mail.com',
      password: '1234',
      name: 'joao',
      token: '123456789',
    };
  }

  setActions() {
    this.actions = [
      {
        label: this.literals.profile,
        icon: 'fa-solid fa-user',
        action: () => this.router.navigate(['/teste1']),
      },
      {
        label: this.literals.signOut,
        icon: 'fa-solid fa-door-open',
        action: () => this.router.navigate(['']),
      },
    ];
  }

  renderMenu() {
    this.menus = [
      {
        label: 'Produtos',
        shortLabel: 'teste',
        icon: 'owo',
        action: () => this.router.navigate(['/teste1']),
      },
      {
        label: 'Novo produto',
        shortLabel: 'teste',
        icon: 'owo',
        action: () => this.router.navigate(['/newProduct']),
      },
      {
        label: 'teste longo 3',
        shortLabel: 'teste',
        icon: 'owo',
        action: () => this.router.navigate(['']),
      },
      {
        label: 'teste longo 4',
        shortLabel: 'teste',
        icon: 'owo',
        action: () => this.router.navigate(['']),
      },
    ];
  }
}
