import {
  AuthenticationController,
  ReviewController,
  UserController,
} from '@/infrastructure/controllers';
import { ReviewRepository, UserRepository } from '@/repositories';
import {
  AuthenticationService,
  HashService,
  ReviewService,
  UserService,
} from '@/services';

export class DIService {
  readonly authenticationControllerInstance: AuthenticationController;
  readonly reviewControllerInstance: ReviewController;
  readonly userControllerInstance: UserController;

  constructor() {
    this.authenticationControllerInstance = new AuthenticationController(
      new AuthenticationService(new UserRepository(), new HashService()),
    );
    this.reviewControllerInstance = new ReviewController(
      new ReviewService(new ReviewRepository()),
    );
    this.userControllerInstance = new UserController(
      new UserService(new UserRepository()),
    );
  }
}
