import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  // partes del form plantilla
  // public user: any = {
  //   name: '',
  //   email: ''
  // }

  // enviar() {
  //   console.log(this.user);
  // }

  // form reactivo

  formularioContacto: FormGroup;
  tipoDni: string = 'DNI';
  mostrarDNI: boolean = false;
  // ejemplo de usuario activo
  // usuarioActivo: any = {
  //   nombre: 'Pedro',
  //   apellido: 'Perez',
  //   dni: '12345678'
  // };

  constructor(private form: FormBuilder) {
    this.formularioContacto = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      tipoDni: [''],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
    // ejemplo cuando queremos setear los datos del form a partir del usuario activo
    // para actualizar y quitar los validators
    // this.formularioContacto.get('apellido')?.clearValidators();
    // this.formularioContacto.get('apellido')?.updateValueAndValidity();
    // // actualizar solo una parte del form
    // this.formularioContacto.patchValue({
    //   nombre: this.usuarioActivo.nombre,
    //   apellido: this.usuarioActivo.apellido,
    //   dni: this.usuarioActivo.dni
    // })
    // // quitar los espacios llenos
    // this.formularioContacto.get('nombre')?.disable()
    // this.formularioContacto.get('apellido')?.disable()
    // this.formularioContacto.get('dni')?.disable()

    // para escuchar cada cambio que se haga en el formulario
    this.formularioContacto.get('tipoDni')?.valueChanges.subscribe(value => {
      this.mostrarDNI = value != ''
      this.tipoDni = value;
    })
  }

  ngOnDestroy(): void {
    console.log('El componente contacto se jue :/')
  }

  hasErros( controlName: string, errorType: string) {
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched;
  }

  enviar() {
    console.log(this.formularioContacto)
  }
}
