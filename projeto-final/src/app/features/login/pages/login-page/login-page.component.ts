import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginUsuario: string = "";
  senhaUsuario: string = "";
  error = false;

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  autenticador(){
    const user = this.userService.getUsersByLoginAndSenha(this.loginUsuario, this.senhaUsuario)

    if(user){
      sessionStorage.setItem('user', JSON.stringify(user));
      this.router.navigateByUrl('/sell');
    }else{
        this.error = true;
      }
  }
}
