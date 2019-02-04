const trackModel = require('../models/track-model')
const expect = require('chai').expect;

describe('Track', () =>{
    it('Model', async () => {
        const obj = await new trackModel({
            action: "Create",
            object: "Company"
        })
        expect(obj.get('action')).to.equals("Create")
        expect(obj.get('object')).to.equals("Company")
    })
})
