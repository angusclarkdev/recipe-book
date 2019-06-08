const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/api/users', (req, res) => {
  res.send({
    users: [
      {
        firstName: 'Angus',
        lastName: 'Clark'
      },
      {
        firstName: 'Aidan',
        lastName: 'Rowell'
      }
    ]
  })
})

app.listen(3000, () => console.info('listening on port 3000...'))
