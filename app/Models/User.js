'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class User extends Model {
    static boot(){
        super.boot()
        this.addHook('beforeCreate',function()
        {
            this.password = use('Hash').make(this.password)
            yield next
        })
    }
}

module.exports = User
