const roleModel = require('../models/role-model')
const expect = require('chai').expect;

describe('Role', () =>{
    it('Model', async () => {
        const obj = await new roleModel({
            name: 'Role 1',
            enabled: true,
            idCompany: '5c539f218687cf1574157ef0'
        })
        expect(obj.get('name')).to.equals("Role 1")
        expect(obj.get('enabled')).to.equals(true)
        expect(obj.get('idCompany').toString()).to.equals('5c539f218687cf1574157ef0')
    })
})
