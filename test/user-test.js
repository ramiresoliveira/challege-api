const userModel = require('../models/user-model')
const expect = require('chai').expect;


describe('User', () =>{
    it('Model', async () => {
        const obj = await new userModel({
            name: 'Usuario 1',
            email: 'usuario@teste',
            password: '123456',
            enabled: true,
            idCompany: '5c55b88d3d8486178a029652',
        })
        expect(obj.get('idCompany').toString()).to.equals('5c55b88d3d8486178a029652')
        expect(obj.get('name')).to.equals('Usuario 1')
        expect(obj.get('email')).to.equals('usuario@teste')
        expect(obj.get('password')).to.equals('123456')
        expect(obj.get('enabled')).to.equals(true)

    })
})
