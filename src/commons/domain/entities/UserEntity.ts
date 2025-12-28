export class UserEntity {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;

  constructor(
    userId: number,
    firstName: string,
    lastName: string,
    email: string,
    role: string
  ) {
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.role = role;
  }
}
