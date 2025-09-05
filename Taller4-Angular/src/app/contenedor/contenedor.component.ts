import { Component } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-contenedor',
  imports: [SideBarComponent, ContentComponent],
  templateUrl: './contenedor.component.html',
  styleUrl: './contenedor.component.css'
})
export class ContenedorComponent {

}
