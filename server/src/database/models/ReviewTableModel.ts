import { DataTypes, Model, Optional } from 'sequelize';

import context from '@/database/context';
import { UserTableModel } from '@/database/models/UserTableModel';

interface ReviewAttributes {
  id: number;
  author_id: number;
  content: string;
  rating: number;
}

interface ReviewCreationAttributes extends Optional<ReviewAttributes, 'id'> {}

export class ReviewTableModel
  extends Model<ReviewAttributes, ReviewCreationAttributes>
  implements ReviewAttributes
{
  declare id: number;
  declare author_id: number;
  declare content: string;
  declare rating: number;

  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

ReviewTableModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: UserTableModel,
        key: 'id',
      },
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: context,
    tableName: 'reviews',
    timestamps: true,
  },
);
