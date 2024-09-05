export type EnvironmentVariables = {
  NODE_ENV: string;

  SERVER_HOST: string;
  SERVER_NAME: string;
  SERVER_PORT: string | number;

  DB_NAME: string;
  DB_HOST: string;
  DB_PASSWORD: string;
  DB_PROVIDER: string;
  DB_PORT: string | number;
  DB_USERNAME: string;

  LOGS_PATH: string;

  RATE_LIMITER_REQUEST_COUNT: string | number;
  RATE_LIMITER_TIME_WINDOW_MS: string | number;

  SESSION_SECRET: string;
};
