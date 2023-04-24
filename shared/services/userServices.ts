import axios from "axios";

const userServiceUrl = process.env.USER_SERVICE_URL;
export interface User {
    Name: string;
    Email: string;
    Password?: string;
    ID: string
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
  const verifiedRequest = await axios.get("http://localhost:3030/validate", );
  return verifiedRequest.data.message;
}
export async function getUser(user:string,password: string): Promise<User>{
  axios.defaults.withCredentials = true;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const response = await axios.post("http://localhost:3030/getUser",  {
      "Email":user,
      "Password": password
     });
     const verifiedRequest = await axios.get("http://localhost:3030/validate", );
     console.log(verifiedRequest.data.message)
     //parse the response
     
    return verifiedRequest.data.message;
}