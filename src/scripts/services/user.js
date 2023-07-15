
import { baseUrl } from '../services/variable.js'

async function getUser(userName){

    const response = await fetch(`${baseUrl}/${userName}`)
       return await response.json() 
}

export {getUser}