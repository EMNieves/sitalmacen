import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Cliente extends Model {
  public nombreProductos!: string;
  public marcaProductos!: string;
  public precioProductos!: string;
  public cantidadProductos!: string;
  public createAt!: string;
  public updateAt!: String;

}

export interface ClienteI {
    nombreProductos: string;
    marcaProductos: string;
    precioProductos: string;
    cantidadProductos: string;
    createAt: string;
    updateAt: String;
}

Cliente.init(
  {
    nombreProductos: {
        type: DataTypes.STRING,
        allowNull: false
      },
      marcaProductos: {
        type: DataTypes.STRING,
        allowNull: false
      },
      precioProductos: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      cantidadProducto: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createAt: {
        type: DataTypes.STRING,
        allowNull: false
      },
      
      updateAt: {
        type: DataTypes.STRING,
        allowNull: false
      }
  },
  {
    tableName: "productos", 
    sequelize: database,
    timestamps: false
  }
);