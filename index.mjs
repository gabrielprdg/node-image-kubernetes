import { createServer } from 'node:http'

const server = createServer((r,rs) => {
  rs.writeHead(200, { 'Content-Type': 'application/json' })
  rs.end('Hello')
})
 
server.listen(process.env.PORT || 3000, () => console.log(`Server running on port ${process.env.PORT || 3000}`))
