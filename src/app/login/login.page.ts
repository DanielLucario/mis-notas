import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { AlertController, NavController } from '@ionic/angular';
@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    formInicio: FormGroup;

    constructor(public fb: FormBuilder, public alertController: AlertController, public navController: NavController) {
        this.formInicio = fb.group({
            'nombre': new FormControl("", Validators.required),
            'password': new FormControl("", Validators.required)
        })
    }

    ngOnInit() {
    }

    async ingresar() {
        var f = this.formInicio.value
        var usuario = JSON.parse(localStorage.getItem('usuario'))
        if (usuario.nombre === f.nombre && usuario.password === f.password) {
            this.navController.navigateRoot('/menu/notas');
        } else {
            const alert = await this.alertController.create({
                header: 'Datos incompletos',
                message: 'Los datos que ingresaste no son correctos',
                buttons: ['Aceptar']
            });
            await alert.present();
        }
    }

}
