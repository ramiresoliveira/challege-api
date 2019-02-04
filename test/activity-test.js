const activityModel = require('../models/activity-model')
const expect = require('chai').expect;
const types = require('mongoose').Types

describe('Activity', () =>{
    it('Model', async () => {
        const obj = await new activityModel({
            idFlow: '5c5731bdc6f18524b8bd1c35',
            idStep: '5c5732dfccbef9251c3a087e',
            ownerViewer: '5c57414c7533592a51473506',
            type: 'StartFlow'
        })
        expect(obj.get('idFlow').toString()).to.equals('5c5731bdc6f18524b8bd1c35')
        expect(obj.get('idStep').toString()).to.equals('5c5732dfccbef9251c3a087e')
        expect(obj.get('ownerViewer').toString()).to.equals('5c57414c7533592a51473506')
        expect(obj.get('type')).to.equals("StartFlow")
    })
})
