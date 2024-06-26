export interface AuthenticationResponse {
  token: string;
  userProfile: {
    email: string;
    firstname: string;
    lastname: string;
    username: string;
  };
}
