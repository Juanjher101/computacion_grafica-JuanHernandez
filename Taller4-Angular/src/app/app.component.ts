import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuscadorComponent } from './buscador/buscador.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BuscadorComponent, HeaderComponent, LogoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Taller4-Angular';
}
