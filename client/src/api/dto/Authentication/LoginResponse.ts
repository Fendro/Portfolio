export type LoginResponse = {
  token: string;
  userProfile: {
    email: string;
    firstname: string;
    lastname: string;
    username: string;
  };
};
