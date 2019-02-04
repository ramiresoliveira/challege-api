const router = require('express').Router()
const viewerController = require('../controller/viewer-controller')

/**
 * @api {get} /viewer Viewer-GET
 * @apiGroup Challenge-Api
 * 
 * @apiSuccess {Boolean} enabled Step habilitado
 * @apiSuccess {Object} _id Id do Viewer
 * @apiSuccess {String} clientId Client Id
 * @apiSuccess {String} customFields Custom fields
 * @apiSuccess {String} uuId uuId
 * @apiSuccess {Date} updatedAt Data de alteração
 * @apiSuccess {Date} createdAt Data de criação
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *     {
 *       "enabled": true,
 *       "_id": "5c57414c7533592a51473506",
 *       "clientId": "01234",
 *       "customFields": "campo de teste",
 *       "uuId": "249780d0-27ea-11e9-865b-7b35a5d0d293",
 *       "updatedAt": "2019-02-03T19:30:20.135Z",
 *       "createdAt": "2019-02-03T19:30:20.135Z",
 *       "__v": 0
 *    }
 *
 */
router.get('/', viewerController.find)
/**
 * @api {post} /viewer Viewer-POST
 * @apiGroup Challenge-Api
 * 
 * @apiSuccess {Boolean} enabled Step habilitado
 * @apiSuccess {String} clientId Client Id
 * @apiSuccess {String} customFields Custom fields
 * 
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 201 Created
 *    {
 *      "_id": "5c54f2e6904b9c38f6b60aa2",
 *    }
 */
router.post('/', viewerController.save)

module.exports = router