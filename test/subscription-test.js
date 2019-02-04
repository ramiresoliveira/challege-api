const subscriptionModel = require('../models/subscription-model')
const expect = require('chai').expect;

describe('Subscription', () =>{
    it('Model', async () => {
        const obj = await new subscriptionModel({
            idCompany: '5c539f218687cf1574157ef0',
            idPlan: '5c55b88d3d8486178a029652',
            status: 'trial',
            enabled: true
        })
        expect(obj.get('idCompany').toString()).to.equals('5c539f218687cf1574157ef0')
        expect(obj.get('idPlan').toString()).to.equals('5c55b88d3d8486178a029652')
        expect(obj.get('status')).to.equals('trial')
        expect(obj.get('enabled')).to.equals(true)
    })
})
