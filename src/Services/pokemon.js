import axios from 'axios'
import {GET_URL_POKEMON} from './config'

export async function GET_POKEMON(){
    try {
        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon`)
        return resp
    } catch (error) {
        console.log("Erro: ", error);
    }
}