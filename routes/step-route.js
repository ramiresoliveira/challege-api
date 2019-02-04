const router = require('express').Router()
const stepController = require('../controller/step-controller')

/**
 * @api {get} /step Step-GET
 * @apiGroup Challenge-Api
 * 
 * @apiSuccess {Boolean} enabled Step habilitado
 * @apiSuccess {Object} _id Id do Step
 * @apiSuccess {String} name Nome do Step 
 * @apiSuccess {String} description Nome do Step
 * @apiSuccess {Object} idFlow Flow do Step 
 * @apiSuccess {Object} idCompany Empresa do Step 
 * @apiSuccess {String} type Tipo ['popover', 'modal', 'hotspot', 'video', 'notification'] 
 * @apiSuccess {String} innerText Texto interno
 * @apiSuccess {Date} updatedAt Data de alteração
 * @apiSuccess {Date} createdAt Data de criação
 * @apiSuccess {Date} idNextStep Próximo Step
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *       "enabled": true,
 *       "_id": "5c5738728065be26c02c5e86",
 *       "name": "passo 2",
 *       "description": "descrição passo 2",
 *       "idFlow": "5c5731bdc6f18524b8bd1c35",
 *       "idCompany": "5c539f218687cf1574157ef0",
 *       "type": "popover",
 *       "innerText": "texto interno 2",
 *       "updatedAt": "2019-02-03T18:53:56.962Z",
 *       "createdAt": "2019-02-03T18:52:34.168Z",
 *       "idNextStep": "5c5738c48065be26c02c5e88"
 *   }
 *
 */
router.get('/', stepController.find)

/**
 * @api {post} /step Step-POST
 * @apiGroup Challenge-Api
 * 
 * @apiParam {Boolean} enabled Step habilitado
 * @apiParam {String} name Nome do Step 
 * @apiParam {String} description Nome do Step
 * @apiParam {Object} idFlow Flow do Step 
 * @apiParam {Object} idCompany Empresa do Step 
 * @apiParam {String} type Tipo ['popover', 'modal', 'hotspot', 'video', 'notification'] 
 * @apiParam {String} innerText Texto interno
 * 
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 201 Created
 *    {
 *      "_id": "5c54f2e6904b9c38f6b60aa2",
 *    }
 */
router.post('/', stepController.save)

module.exports = router