
export class InvalidEmailAddress extends Error {
  constructor() {
    super();
    this.name = 'InvalidEmailAddress';
    this.message = 'Please provide a valid email address'
  }
}

export class InvalidPassword extends Error {
  constructor() {
    super();
    this.name = 'InvalidPassword';
    this.message = 'Please provide a valid password'
  }
}


export class UsernameNotAvailable extends Error {
  constructor() {
    super();
    this.name = 'UsernameNotAvailable';
    this.message = 'Username already taken';
  }
}

export class EmailNotAvailable extends Error {
  constructor() {
    super()
    this.name = 'EmailNotAvailable';
    this.message = 'Email already taken';
  }
}