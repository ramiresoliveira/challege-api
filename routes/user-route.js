const router = require('express').Router()
const userController = require('../controller/user-controller')
/**
 * @api {get} /user User-GET
 * @apiGroup Challenge-Api
 * 
 * @apiSuccess {Boolean} enabled Usuário habilitado
 * @apiSuccess {Object[]} roles Funções do usuário
 * @apiSuccess {Object} _id Id do usuário
 * @apiSuccess {String} name Nome do usuário 
 * @apiSuccess {Object} idCompany Empresa do usuário 
 * @apiSuccess {String} email E-mail do usuário 
 * @apiSuccess {String} password Senha do usuário 
 * @apiSuccess {Date} updatedAt Data de alteração
 * @apiSuccess {Date} createdAt Data de criação
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "enabled": true,
 *      "roles": [
 *          "5c54c933aa81232724af03c4",
 *          "5c54f112696ee8378f980b53"
 *      ],
 *      "_id": "5c54f2e6904b9c38f6b60aa2",
 *      "name": "Usuario",
 *      "idCompany": "5c539f218687cf1574157ef0",
 *      "email": "usuario@teste.com.br",
 *      "password": "usuario123",
 *      "updatedAt": "2019-02-02T01:31:18.645Z",
 *      "createdAt": "2019-02-02T01:31:18.645Z",
 *  }
 *
 */
router.get('/', userController.find)

/**
 * @api {post} /user User-POST
 * @apiGroup Challenge-Api
 * 
 * @apiParam {String} name Nome do usuário.
 * @apiParam {Object} idCompany Empresa do usuário.
 * @apiParam {String} email E-mail do usuário.
 * @apiParam {String} password Senha do usuário.
 * @apiParam {Boolean} enabled Usuário habilitado.
 * @apiParam {Object[]} roles Funções do usuário.
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 201 Created
 *    {
 *      "_id": "5c54f2e6904b9c38f6b60aa2",
 *    }
 */
router.post('/', userController.save)

/**
 * @api {put} /user User-PUT
 * @apiGroup Challenge-Api
 *
 * @apiParam {Object} id Id do usuário. 
 * @apiParam {String} name Nome do usuário.
 * @apiParam {String} email E-mail do usuário.
 * @apiParam {String} password Senha do usuário.
 * @apiParam {Boolean} enabled Usuário habilitado.
 * @apiParam {Object[]} roles Funções do usuário.
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 202 Accepted
 *    {
 *      "_id": "5c54f2e6904b9c38f6b60aa2",
 *    }
 */
router.put('/', userController.update)

/**
 * @api {delete} /user User-DELETE
 * @apiGroup Challenge-Api
 * 
 * @apiParam {Object} id Id do usuário.
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 202 Accepted
 *    {
 *      "_id": "5c54f2e6904b9c38f6b60aa2",
 *    }
 */
router.delete('/', userController.delete)

/**
 * @api {post} /user/login Login-PUT
 * @apiGroup Challenge-Api
 * 
 * @apiParam {String} email E-mail do usuário.
 * @apiParam {String} password Senha do usuário.
 * 
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 201 Created
 *    {
 *      "success": true,
 *      "message": "Token criado",
 *      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoicmFtaXJlc0Bib2wuY29tLmJyIn0sImlhdCI6MTU0OTMxMzgwMCwiZXhwIjoxNTQ5MzE3NDAwfQ.8nPqNRGGNnm3V5KfXQpURh7SyE7WF5st6224ZXxsAp4"
 *    }
 */
router.post('/login', userController.login)

module.exports = router