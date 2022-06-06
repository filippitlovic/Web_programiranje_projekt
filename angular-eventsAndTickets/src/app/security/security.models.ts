import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';

export interface userCredentials {
  email: string;
  password: string;
}

export interface authenticationResponse {
  Token: string;
  expiration: Date;
}
