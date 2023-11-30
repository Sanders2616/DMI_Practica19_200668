import { DataTypes,  } from "sequelize";
import dbconection from "../config/db.js";

const Game= dbconection.define("tbb_game",
{
    title:{
    type:DataTypes.STRING,
    allowNull:false
 },
 startsAt:{
    type:DataTypes.STRING,
    allowNull:false,
    defaultValue: DataTypes.NOW
 },
 endsAt:DataTypes.STRING,
 Score:{
    type:DataTypes.INTEGER,
    allowNull:false,
    defaultValue:0
 },
 duration:DataTypes.TIME
})
export default Game;