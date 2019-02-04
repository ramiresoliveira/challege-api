const invoiceModel = require('../models/invoice-model')
const expect = require('chai').expect;

describe('Invoice', () =>{
    it('Model', async () => {
        let date = new Date
        const obj = await new invoiceModel({
            value: 200,
            dueDate: 10,
            paiedDate: date,
            enabled: true,
            idSubscription: '5c539f218687cf1574157ef0'
        })
        expect(obj.get('value')).to.equals(200)
        expect(obj.get('dueDate')).to.equals(10)
        expect(obj.get('paiedDate')).to.equals(date)
        expect(obj.get('enabled')).to.equals(true)
        expect(obj.get('idSubscription').toString()).to.equals('5c539f218687cf1574157ef0')
    })
})
