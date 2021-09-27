import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides } from '@ionic/angular';

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
    email: 'test1@test.com',
    password: '123456'
  };

  constructor() { 
 

  }

  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
];

  ngOnInit() {
    // this.slides1.lockSwipes(true);
   
    
  }

  login( flogin: NgForm ) {


    console.log(flogin.valid);
    console.log(this.loginUser);
    

  }

  registro( fregistro: NgForm ) {

    console.log(fregistro.valid);

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
