const app = require('./src/app')
const port = process.env.PORT || process.env.PORT_LOCAL

app.listen (port, () => {
    console.log(`listening on port ${port}`)
})