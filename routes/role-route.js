const router = require('express').Router()
const roleController = require('../controller/role-controller')

/**
 * @api {get} /role Role-GET
 * @apiGroup Challenge-Api
 * 
 * @apiSuccess {Boolean} enabled Role habilitado
 * @apiSuccess {Object} _id Id da Role
 * @apiSuccess {String} name Nome da Role 
 * @apiSuccess {Object} idCompany Empresa da Role 
 * @apiSuccess {Date} updatedAt Data de alteração
 * @apiSuccess {Date} createdAt Data de criação
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *     {
 *       "_id": "5c55b49f34e51d16bf186a0e",
 *       "name": "Funcionario 1",
 *       "idCompany": "5c54b2d838b4301ac7837a0c",
 *       "enabled": true,
 *       "updatedAt": "2019-02-02T15:17:51.467Z",
 *       "createdAt": "2019-02-02T15:17:51.467Z",
 *       "__v": 0
 *    }
 *
 */
router.get('/', roleController.find)

/**
 * @api {post} /role Role-POST
 * @apiGroup Challenge-Api
 * 
 * @apiParam {Boolean} enabled Role habilitado
 * @apiParam {Object} _id Id da Role
 * @apiParam {String} name Nome da Role 
 * @apiParam {Object} idCompany Empresa da Role 
 * 
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 201 Created
 *    {
 *      "_id": "5c54f2e6904b9c38f6b60aa2",
 *    }
 */
router.post('/', roleController.save)

/**
 * @api {put} /role Role-PUT
 * @apiGroup Challenge-Api
 * 
 * @apiParam {Boolean} enabled Role habilitado
 * @apiParam {Object} _id Id da Role
 * @apiParam {String} name Nome da Role 
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 201 Created
 *    {
 *      "_id": "5c54f2e6904b9c38f6b60aa2",
 *    }
 */
router.put('/', roleController.update)

/**
 * @api {delete} /role Role-DELETE
 * @apiGroup Challenge-Api
 * 
 * @apiParam {Object} id Id da Role.
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 202 Accepted
 *    {
 *      "_id": "5c54f2e6904b9c38f6b60aa2",
 *    }
 */
router.delete('/', roleController.delete)

module.exports = router