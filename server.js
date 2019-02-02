let app = require('./config/config-express')()
require('./config/database')()
const port = 3000
const companyRoute = require('./routers/company-route')
const roleRoute = require('./routers/role-route')
const userRoute = require('./routers/user-route')

app.use('/company', companyRoute)
app.use('/role', roleRoute)
app.use('/user', userRoute)

app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`)
})
