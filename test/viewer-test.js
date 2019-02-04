const viewerModel = require('../models/viewer-model')
const expect = require('chai').expect;


describe('User', () =>{
    it('Model', async () => {
        const obj = await new viewerModel({
            clientId: '123asd546',
            uuId: '249780d0-27ea-11e9-865b-7b35a5d0d293',
            customFields: 'campo teste',
            enabled: true
        })
        
        expect(obj.get('clientId')).to.equals('123asd546')
        expect(obj.get('uuId')).to.equals('249780d0-27ea-11e9-865b-7b35a5d0d293')
        expect(obj.get('customFields')).to.equals('campo teste')
        expect(obj.get('enabled')).to.equals(true)

    })
})
