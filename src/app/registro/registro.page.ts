import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formRegistro: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController) {
    this.formRegistro = fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmar': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  }

  async guardar() {
    var f = this.formRegistro.value
    if (this.formRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Debes de introducir todos los datos',
        buttons: ['Aceptar']
      });
      await alert.present();
    }
    var usuario = {
      nombre: f.nombre,
      password: f.password
    }
    localStorage.setItem('usuario', JSON.stringify(usuario))
  }

}
