import { DataTypes, Model, Optional } from 'sequelize';

import context from '@/database/context';

interface ReviewAttributes {
  id: number;
  content: string;
  rating: number;
}

interface ReviewCreationAttributes extends Optional<ReviewAttributes, 'id'> {}

export class ReviewTableModel
  extends Model<ReviewAttributes, ReviewCreationAttributes>
  implements ReviewAttributes
{
  declare id: number;
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
