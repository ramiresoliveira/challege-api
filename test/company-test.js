const companyModel = require('../models/company-model')
const expect = require('chai').expect;

describe('Company', () =>{
    it('Model', async () => {
        const obj = await new companyModel({
            name: 'Empresa 1',
            description: 'Empresa 1 descrição',
            idOwner: '5c55b88d3d8486178a029652',
        })
        expect(obj.get('idOwner').toString()).to.equals('5c55b88d3d8486178a029652')
        expect(obj.get('name')).to.equals('Empresa 1')
        expect(obj.get('description')).to.equals('Empresa 1 descrição')
    })
})
