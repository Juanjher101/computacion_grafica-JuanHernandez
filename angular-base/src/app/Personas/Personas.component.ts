import { Component } from "@angular/core";

@Component({
    selector:'personas-app',
    templateUrl: './Personas.component.html',
    styleUrl: './Personas.component.css'

})

export class MiComponentePersona{
    public mensaje= 'Mi Mensaje';
    public OtroMensaje= 'Segundo Mensaje';
};