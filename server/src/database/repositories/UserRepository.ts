import { LoginDto, UserCreateDto } from '@/application/dto';
import { UserTableModel } from '@/database/models/UserTableModel';
import { User } from '@/entities';
import { IUserRepository } from '@/interfaces';

export class UserRepository implements IUserRepository {
  async getByIdAsync(id: number): Promise<User> {
    const userModel = await UserTableModel.findByPk(id);
    if (!userModel) {
      throw new Error('User not found.');
    }

    return new User(
      userModel.id,
      userModel.email,
      userModel.password,
      userModel.username,
    );
  }

  async getByCredentialsAsync(credentials: LoginDto): Promise<User> {
    const userModel = await UserTableModel.findOne({
      where: { email: credentials.identifier, password: credentials.password },
    });

    if (!userModel) {
      throw new Error('User not found.');
    }

    return new User(
      userModel.id,
      userModel.email,
      userModel.password,
      userModel.username,
    );
  }

  async createAsync(user: UserCreateDto): Promise<User> {
    const userModel = await UserTableModel.create({
      email: user.email,
      password: user.password,
      username: user.username,
    });

    return new User(
      userModel.id,
      userModel.email,
      userModel.password,
      userModel.username,
    );
  }
}
