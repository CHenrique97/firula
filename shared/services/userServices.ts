import axios from "axios";

const userServiceUrl = process.env.USER_SERVICE_URL;
export interface User {
    name: string;
    email: string;
    password: string;
  }

  export interface RequestUser{
    user: string;
    password: string;
  }
  
  export interface CreateUserRequest {
    name: string;
    email: string;
    password: string;
  }
  
  export interface ValidateUserRequest {
    name: string;
    email: string;
    password: string;
  }

//todo
export async function createUser(request: CreateUserRequest): Promise<User> {
  const response = await axios.post<User>(`${userServiceUrl}/users`, request);
  return response.data;
}
//todo
export async function validateUser(request: ValidateUserRequest): Promise<boolean> {
  const response = await axios.get<boolean>(`${userServiceUrl}/users/validate`, { params: request });
  return response.data;
}
//todo
export async function getUser(user:string,password: string): Promise<User> {
    const response = await axios.post<User>("http://localhost:3030/getUser",  {
      "Email":user,
      "Password": password
     });
    return response.data;
}