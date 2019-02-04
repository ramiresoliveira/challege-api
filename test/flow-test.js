const flowModel = require('../models/flow-model')
const expect = require('chai').expect;

describe('Flow', () =>{
    it('Model', async () => {
        const obj = await new flowModel({
            name: 'Ciclo 1',
            description: 'descrição 1',
            idCompany: '5c539f218687cf1574157ef0'
        })
        expect(obj.get('name')).to.equals('Ciclo 1')
        expect(obj.get('description')).to.equals('descrição 1')
        expect(obj.get('idCompany').toString()).to.equals('5c539f218687cf1574157ef0')
    })
})
