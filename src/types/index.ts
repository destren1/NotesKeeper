export interface User {
  username: string;
  email: string;
}

export interface Note {
  id: string;
  title: string;
  description: string;
}

export interface RegisterFormData {
  username: string;
  email: string;
  password: string;
}