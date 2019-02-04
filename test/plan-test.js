const planModel = require('../models/plan-model')
const expect = require('chai').expect;

describe('Plan', () =>{
    it('Model', async () => {
        const obj = await new planModel({
            name: 'Basic',
            value: 250,
            enabled: true
        })
        expect(obj.get('name')).to.equals("Basic")
        expect(obj.get('value')).to.equals(250)
        expect(obj.get('enabled')).to.equals(true)
    })
})
