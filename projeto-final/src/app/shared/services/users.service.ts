import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<User> = [
    {
      id: 1,
      nome: 'Arthur Marra',
      login: 'arthurmarraa@gmail.com',
      senha: '123456'
    },
    {
      id: 2,
      nome: 'Alan',
      login: 'alan@gmail.com',
      senha: '123456'
    },
    {
      id: 3,
      nome: 'Nathan',
      login: 'nathan@gmail.com',
      senha: '123456'
    }
  ]
  constructor() { }

  getUsers() {
    return this.users;
  }

  getUsersByLoginAndSenha(login: string, senha: string){
    return this.users.find((users)=> users.login === login && users.senha === senha)
  }
}
