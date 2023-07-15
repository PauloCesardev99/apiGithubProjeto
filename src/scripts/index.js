

import {getUser} from '../scripts/services/user.js'
import {getRepos} from '../scripts/services/repo.js'
import {user} from '../scripts/objects/user.js'






document.querySelector('#btn-search').addEventListener('click', ()=>{

    const userName = window.document.getElementById('input-search').value

    getUserProfile(userName)
})

document.querySelector('#input-search').addEventListener('keyup', (e)=>{

    const userName = e.target.value 
    const key = e.which || e.keyCode

    const isEnterKeyPressed  = key === 13

    if(isEnterKeyPressed){
        getUserProfile(userName)
    }
    
})




function getUserProfile(userName){

   


     getUser(userName).then(userData =>{

        console.log(userData)
        //avatar url
        //bio
        //name
        let userInfo = `
        
        <div class= "info">

        <img src = "${userData.avatar_url}" alt= "Foto do perfil do usuário" />

        <div class = "data">
                <h1> ${userData.name ?? 'Não possui nome cadastrado'}</h1>
                <p> ${userData.bio ?? 'Não possui bio cadastrada'}</p>
        </div>
        
        </div>`

        document.querySelector('.profile-data').innerHTML = userInfo

        getUserrepositories(userName)

    })
}

function getUserrepositories(userName){
    
    getRepos(userName).then(reposData =>{


        let repositoriesitens = ''

        reposData.forEach(repo => {
            repositoriesitens += `<li> <a href="${repo.html_url}" target="_blank"> ${repo.name} </a> </li>`
        });

        document.querySelector('.profile-data').innerHTML += `
                                                                <div class="repositories section">
                                                                <h2>Repositorio </h2>
                                                                <ul>${repositoriesitens}</ul>
                                                                </div>`

    })
}




