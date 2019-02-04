let app = require('./config/config-express')()
require('./config/database')()
const port = 3000

const companyRoute = require('./routes/company-route')
const roleRoute = require('./routes/role-route')
const userRoute = require('./routes/user-route')
const flowRoute = require('./routes/flow-route')
const stepRoute = require('./routes/step-route')
const viewerRoute = require('./routes/viewer-route')
const activityRoute = require('./routes/activity-route')
const trackRoute = require('./routes/track-route')

app.use('/company', companyRoute)
app.use('/role', roleRoute)
app.use('/user', userRoute)
app.use('/flow', flowRoute)
app.use('/step', stepRoute)
app.use('/viewer', viewerRoute)
app.use('/activity', activityRoute)
app.use('/track', trackRoute)
app.use('/apidoc', (req, res)=>{ res.redirect('./index.html')})

app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`)
})
