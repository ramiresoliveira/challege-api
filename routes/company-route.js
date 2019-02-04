const router = require('express').Router()
const companyController = require('../controller/company-controller')

/**
 * @api {get} /company Company-GET
 * @apiGroup Challenge-Api
 * 
 * @apiSuccess {Object} _id Id da Empresa
 * @apiSuccess {Boolean} name Nome da Empresa
 * @apiSuccess {Boolean} description Descrição da Empresa
 * @apiSuccess {Date} updatedAt Data de alteração
 * @apiSuccess {Date} createdAt Data de criação
 * @apiSuccess {Object} idOwner Usuário Id do usuário dono
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *       "_id": "5c539f218687cf1574157ef0",
 *       "name": "Company",
 *       "description": "Company description",
 *       "updatedAt": "2019-02-03T15:50:56.890Z",
 *       "createdAt": "2019-02-01T01:21:37.843Z",
 *       "idOwner": "5c54f2e6904b9c38f6b60aa2"
 *    }
 *
 */
router.get('/', companyController.find)

/**
 * @api {post} /company Company-POST
 * @apiGroup Challenge-Api
 * 
 * @apiParam {String} name Nome da Empresa
 * @apiParam {String} description Descrição da Empresa
 * @apiParam {Date} updatedAt Data de alteração
 * @apiParam {Date} createdAt Data de criação
 * @apiParam {Object} idOwner Id do usuário dono

 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 201 Created
 *    {
 *      "_id": "5c54f2e6904b9c38f6b60aa2",
 *    }
 */
router.post('/', companyController.save)

/**
 * @api {put} /company Company-PUT
 * @apiGroup Challenge-Api
 * 
 * @apiParam {Object} id Id da Empresa
 * @apiParam {String} name Nome da Empresa
 * @apiParam {String} description Descrição da Empresa
 * @apiParam {Object} idOwner Id do usuário dono
 * @apiParam {json} subscription {
		"idPlan": "5c55cd3b1964bb20ddc2804c",
		"status": "trial",
		"dueDate": 5
	}


 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 201 Created
 *    {
 *      "_id": "5c54f2e6904b9c38f6b60aa2",
 *    }
 */
router.put('/', companyController.update)

module.exports = router