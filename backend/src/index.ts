import { app } from './server'
import moment from 'moment'
const PORT = 3000

app.listen(PORT, () => console.log(`Running on port ${ PORT } - ${ moment().toLocaleString() }`))
