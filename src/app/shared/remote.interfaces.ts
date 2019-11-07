import { Entity } from 'wakanda-client';

export interface IUser extends Entity {
  ID: string;
  Firstname: string;
  lastname: string;
}
