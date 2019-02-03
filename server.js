let app = require('./config/config-express')()
require('./config/database')()
const port = 3000
const companyRoute = require('./routers/company-route')
const roleRoute = require('./routers/role-route')
const userRoute = require('./routers/user-route')
const flowRoute = require('./routers/flow-route')
const stepRoute = require('./routers/step-route')
const viewerRoute = require('./routers/viewer-route')
const activityRoute = require('./routers/activity-route')

app.use('/company', companyRoute)
app.use('/role', roleRoute)
app.use('/user', userRoute)
app.use('/flow', flowRoute)
app.use('/step', stepRoute)
app.use('/viewer', viewerRoute)
app.use('/activity', activityRoute)

app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`)
})
