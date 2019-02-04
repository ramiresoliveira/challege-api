const router = require('express').Router()
const flowController = require('../controller/flow-controller')

/**
 * @api {get} /flow Flow-GET
 * @apiGroup Challenge-Api
 * 
 * @apiSuccess {Boolean} enabled Flow habilitado
 * @apiSuccess {Object} _id Id do Flow
 * @apiSuccess {String} name Nome do Flow 
 * @apiSuccess {String} description Descrição do Flow 
 * @apiSuccess {Object} idStarStep Step inicial
 * @apiSuccess {Object} idCompany Empresa do Flow 
 * @apiSuccess {Date} updatedAt Data de alteração
 * @apiSuccess {Date} createdAt Data de criação
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *     {
 *       "enabled": true,
 *       "_id": "5c5731bdc6f18524b8bd1c35",
 *       "name": "Ciclo 1",
 *       "description": "descrição 1",
 *       "idStarStep":"1q489f218687cf1574157ax0" 
 *       "idCompany": "5c539f218687cf1574157ef0",
 *       "updatedAt": "2019-02-03T18:23:57.405Z",
 *       "createdAt": "2019-02-03T18:23:57.405Z",
 *     }
 *
 */
router.get('/', flowController.find)

/**
 * @api {post} /flow Flow-POST
 * @apiGroup Challenge-Api
 * 
 * @apiParam {Boolean} enabled Flow habilitado
 * @apiParam {String} name Nome do Flow 
 * @apiParam {String} description Descrição do Flow 
 * @apiParam {Object} idStarStep Step inicial
 * @apiParam {Object} idCompany Empresa do Flow 
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 201 Created
 *    {
 *      "_id": "5c54f2e6904b9c38f6b60aa2",
 *    }
 */
router.post('/', flowController.save)

/**
 * @api {put} /flow Flow-PUT
 * @apiGroup Challenge-Api
 * 
 * @apiParam {Object} _id Id do Flow
 * @apiParam {Boolean} enabled Flow habilitado
 * @apiParam {String} name Nome do Flow 
 * @apiParam {String} description Descrição do Flow 
 * @apiParam {Object} idStarStep Step inicial
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 201 Created
 *    {
 *      "_id": "5c54f2e6904b9c38f6b60aa2",
 *    }
 */
router.put('/', flowController.update)

/**
 * @api {delete} /flow Flow-DELETE
 * @apiGroup Challenge-Api
 * 
 * @apiParam {Object} id Id do Flow.
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 202 Accepted
 *    {
 *      "_id": "5c54f2e6904b9c38f6b60aa2",
 *    }
 */
router.delete('/', flowController.delete)

module.exports = router