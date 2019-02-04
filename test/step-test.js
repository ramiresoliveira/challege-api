const stepModel = require('../models/step-model')
const expect = require('chai').expect;

describe('Step', () =>{
    it('Model', async () => {
        const obj = await new stepModel({
            name: 'passo 3',
            description: 'descrição passo 3',
            idFlow: '5c5731bdc6f18524b8bd1c35',
            idCompany: '5c539f218687cf1574157ef0',
            type: 'modal',
            innerText: 'texto interno 3',
            idNextStep: '5c539f218687cf1574157efc',
            enabled: true
        })
        expect(obj.get('name')).to.equals('passo 3')
        expect(obj.get('description')).to.equals('descrição passo 3')
        expect(obj.get('idCompany').toString()).to.equals('5c539f218687cf1574157ef0')
        expect(obj.get('idFlow').toString()).to.equals('5c5731bdc6f18524b8bd1c35')
        expect(obj.get('type')).to.equals('modal')
        expect(obj.get('innerText')).to.equals('texto interno 3')
        expect(obj.get('idNextStep').toString()).to.equals('5c539f218687cf1574157efc')
        expect(obj.get('enabled')).to.equals(true)
    })
})
