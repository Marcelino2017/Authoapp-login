import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styles: [
  ]
})
export class ProtegidaComponent implements OnInit {

  data: any = [];
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    console.log('ngonInit Protegido');

    this.auth.userProfile$.subscribe( perfil => {
      console.log(perfil);
      this.data.push(perfil);
    });
  }

}
