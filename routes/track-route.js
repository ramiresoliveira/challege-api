const router = require('express').Router()
const trackController = require('../controller/track-controller')

/**
 * @api {get} /track Track-GET
 * @apiGroup Challenge-Api
 * 
 * @apiSuccess {Boolean} enabled Step habilitado
 * @apiSuccess {Object} _id Id do Track
 * @apiSuccess {String} action Ação ['Create', 'Edit', 'Remove']
 * @apiSuccess {String} object Objeto ['Company', 'Role', 'FLow', 'Step', 'User']
 * @apiSuccess {Date} updatedAt Data de alteração
 * @apiSuccess {Date} createdAt Data de criação
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *       "_id": "5c57552c1417fe10ec250b4d",
 *       "action": "Create",
 *       "object": "Company",
 *       "updatedAt": "2019-02-03T20:55:08.332Z",
 *       "createdAt": "2019-02-03T20:55:08.332Z"
 *    }
 *
 */
router.get('/', trackController.find)

/**
 * @api {post} /track Track-POST
 * @apiGroup Challenge-Api
 * 
 * @apiParam {Boolean} enabled Step habilitado
 * @apiParam {String} action Ação ['Create', 'Edit', 'Remove']
 * @apiParam {String} object Objeto ['Company', 'Role', 'FLow', 'Step', 'User']
 * 
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 201 Created
 *    {
 *      "_id": "5c54f2e6904b9c38f6b60aa2",
 *    }
 */
router.post('/', trackController.save)

module.exports = router