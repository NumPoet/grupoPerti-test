import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';

import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  @ViewChild('slidePrincipal') private  slides1: IonSlides;


  avatarSlide = {
    slidesPerView: 3.5
  }

  primerSlide = {
    allowSlideNext: false,
    allowSlidePrev: false
  }

  loginUser = {
    email: '', //test1@test.com
    password: '' //123456
  };

  registerUser = {
    email: '',
    nombre: '',
    password: ''
  };

  constructor(
    private usuarioService: UsuarioService,
    private storage: Storage
    ) { 
 

  }

  avatars = [
    {
      img: './av-1.png',
      seleccionado: true
    },
    {
      img: './av-2.png',
      seleccionado: false
    },
    {
      img: './av-3.png',
      seleccionado: false
    },
    {
      img: './av-4.png',
      seleccionado: false
    },
    {
      img: './av-5.png',
      seleccionado: false
    },
    {
      img: './av-6.png',
      seleccionado: false
    },
    {
      img: './av-7.png',
      seleccionado: false
    },
    {
      img: './av-8.png',
      seleccionado: false
    },
];

  async ngOnInit() {
    // this.slides1.lockSwipes(true);
    await this.storage.create();
    
  }

  login( flogin: NgForm ) {

    // console.log(this.loginUser);
    this.usuarioService.login(this.loginUser.email, this.loginUser.password);


  }

  registro( fregistro: NgForm ) {

    this.usuarioService.register(this.registerUser.email, this.registerUser.nombre, this.registerUser.password);

  }

  selecionarAvatar( avatar ) {

    this.avatars.forEach( av => av.seleccionado = false);

    avatar.seleccionado = true;

  }

  mostrarRegistro() {
    this.slides1.lockSwipes(false);
    this.slides1.slideTo(1);
    this.slides1.lockSwipes(true);

  }

  mostrarLogin() {

    this.slides1.lockSwipes(false);
    this.slides1.slideTo(0);
    this.slides1.lockSwipes(true);
  }

}
