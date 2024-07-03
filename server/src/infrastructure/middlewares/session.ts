import session from "express-session";

export const sessionMiddleware = (sessionSecret: string) =>
  session({
    cookie: {
      httpOnly: true,
      secure: true,
    },
    resave: false,
    saveUninitialized: true,
    secret: sessionSecret,
  });
