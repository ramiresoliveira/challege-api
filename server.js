let app = require('./config/config-express')()
require('./config/database')()
const port = 3000
const companyRoute = require('./routes/company-route')
const roleRoute = require('./routes/role-route')

app.use('/company', companyRoute)
app.use('/role', roleRoute)

app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`)
})
