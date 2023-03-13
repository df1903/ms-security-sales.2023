import { /* inject, */ BindingScope, injectable} from '@loopback/core';
const generator = require('generate-password');
const MD5 = require("crypto-js/md5");

@injectable({scope: BindingScope.TRANSIENT})
export class UserSecurityService {
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */

  createPassword(): string{
    let password = generator.generate({
      length: 10,
      numbers: true
    });
    return password;

  }

  encrypText(string: string): string{
    let encryptedString = MD5(string).toString();
    return encryptedString;
  }
}
