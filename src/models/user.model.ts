import {belongsTo, Entity, hasMany, model, property} from '@loopback/repository';
import {Login} from './login.model';
import {Role} from './role.model';

@model()
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  fistName: string;

  @property({
    type: 'string',
  })
  secondName?: string;

  @property({
    type: 'string',
    required: true,
  })
  firstLastname: string;

  @property({
    type: 'string',
  })
  secondLastname?: string;

  @property({
    type: 'string',
    required: true,
  })
  mail: string;

  @property({
    type: 'string',
    required: true,
  })
  phone: string;

  @property({
    type: 'string',
})
  password?: string;

  @hasMany(() => Login)
  logins: Login[];

  @belongsTo(() => Role)
  roleId: string;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
