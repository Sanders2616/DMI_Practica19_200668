import{ exit } from 'node:process';
import players from './players.js';
import games from './games.js';
import {Player, Game} from "../models/relationShips.js";
import db from '../config/db.js';

const importarDatos = async ()=> {
    try{
        await db.authenticate()
        await db.sync()
        await Promise.all([
            Player.bulkCreate(players),
        Game.bulkCreate(games)
        ])
        console.log('datos importados correctamente')
        exit()
    }catch(error){
        console.log(error)
        exit(1)
    }
}
const eliminarDatos = async ()=>{
    try{
        await db.sync({force:true})
        console.log('Datos eliminado correctamente')
        exit()
    }catch(error){
        console.log(error)
        exit(1)
    }
}
if( process.argv[2]=== "-i"){
    importarDatos();
}
if(process.argv[2]==="-e"){
    eliminarDatos();
}