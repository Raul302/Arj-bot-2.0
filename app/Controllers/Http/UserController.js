'use strict'
const User = use('App/Models/User')

class UserController {

    async login({request, response, auth}){
        const {email, password}= request.only([
            'email', 'password'
        ])

        const token = await auth.attempt(email,password)
        return response.json(token)
    }

    async register({request, response}){
        const {name, email, password} = request.only([
            'name', 'email', 'password'
        ])
        await User.create([
            name, email, password
        ])

        return response.send({message: "Usuario creado"})
    }

    async show({params, response}){
        const user = await User.find(params.id)
        const res= {
            name : user.name,
            email: user.email
        }

        return response.json(res)
    }
}

module.exports = UserController
