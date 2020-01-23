const axios = require('axios')
const Dev = require('../models/cadastro_dev')

module.exports = {
    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body

        let dev = await Dev.findOne({ github_username })

        //IF (!dev) NÃO ESTÁ FUNCIONANDO
        //if (!dev){
        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
        
        const {name = login, avatar_url, bio} = apiResponse.data
            
        const techsArray = techs.split(',').map(tech => tech.trim())

        const location =  {
                    type: 'Point',
                    coordinates: [longitude, latitude],
                }
            
        dev = await Dev.create({
                    github_username, //não precisa de dois pontos pq a variável e a propriedade tem o mesmo nome. Em JS "short syntax"
                    name,
                    avatar_url,
                    bio,
                    techs: techsArray,
                    location,
                })
        //}
        console.log(name, avatar_url, bio, github_username, techsArray, latitude, longitude)
    
        return response.json(dev)
    }
}