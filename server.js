let app = require('./config/config-express')()
require('./config/database')()
const port = 3000


app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`)
})
