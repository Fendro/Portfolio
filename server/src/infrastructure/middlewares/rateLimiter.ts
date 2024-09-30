import { rateLimit } from 'express-rate-limit';

interface RateLimiterOptions {
  requestCount: number;
  timeWindowMs: number;
}

export const rateLimiterMiddleware = (options: RateLimiterOptions) =>
  rateLimit({
    windowMs: options.timeWindowMs,
    limit: options.requestCount,
  });
