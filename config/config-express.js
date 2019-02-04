require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')
const SECRET = process.env.SECRET


auth = (req, res, next) => {

    if ((req.url=='/user/login')&&(req.method=='POST')) {
        next()
    } else {
        let token = req.body.token || req.query.token || req.headers['authorization'];
        if (token) {
            jwt.verify(token, SECRET, function (err, decoded) {
                if (err) {
                    return res.status(403).json({ success: false, message: 'Falha ao tentar autenticar o token!' })
                } else {
                    req.decoded = decoded
                    next()
                }
            })
        } else {
            return res.status(403).send({
                success: false,
                message: '403 - Forbidden'
            })
        }
    }
}

module.exports = function() {
    let accessLogStream = fs.createWriteStream(path.join('./', 'access.log'), {flags: 'a'})
    const app = express()
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())
    app.use(morgan('combined', {stream: accessLogStream}))
    app.use(auth)
    
    return app
}

