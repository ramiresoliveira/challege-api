const router = require('express').Router()
const activityController = require('../controller/activity-controller')
/**
 * @api {get} /activity Activity-GET
 * @apiGroup Challenge-Api
 * 
 * @apiSuccess {Object} _id Id Activity
 * @apiSuccess {Object} idFlow Id Flow 
 * @apiSuccess {Object} idStep Id Step
 * @apiSuccess {Object} ownerViewer Id Viewer
 * @apiSuccess {String} type Tipo 
 * @apiSuccess {Date} updatedAt Data de alteração
 * @apiSuccess {Date} createdAt Data de criação
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *       "_id": "5c5746b8813f332cf7f12855",
 *       "idFlow": "5c5731bdc6f18524b8bd1c35",
 *       "ownerViewer": "5c57414c7533592a51473506",
 *       "type": "StartFlow",
 *       "updatedAt": "2019-02-03T19:53:28.237Z",
 *       "createdAt": "2019-02-03T19:53:28.237Z",
 *       "__v": 0
 *     }
 *
 */
router.get('/', activityController.find)

/**
 * @api {post} /activity Activity-POST
 * @apiGroup Challenge-Api
 * 
 * @apiParam {Object} idFlow Id Flow .
 * @apiParam {Object} idStep Id Step.
 * @apiParam {String} ownerViewer Id Viewer.
 * @apiParam {String} type Tipo.
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 201 Created
 *    {
 *      "_id": "5c54f2e6904b9c38f6b60aa2",
 *    }
 */
router.post('/', activityController.save)

module.exports = router