import {
  DataTypes,
  Model,
  ModelAttributes,
  Optional,
  Sequelize,
} from 'sequelize';

interface ReviewAttributes {
  id: number;
  content: string;
  rating: number;
}

interface ReviewCreationAttributes extends Optional<ReviewAttributes, 'id'> {}

export class ReviewTable
  extends Model<ReviewAttributes, ReviewCreationAttributes>
  implements ReviewAttributes
{
  declare id: number;
  declare content: string;
  declare rating: number;

  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

const attributes: ModelAttributes<ReviewTable> = {
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
};

const options = {
  tableName: 'reviews',
  timestamps: true,
};

export const initializeReviewTable = (sequelize: Sequelize) =>
  ReviewTable.init(attributes, { ...options, sequelize });
