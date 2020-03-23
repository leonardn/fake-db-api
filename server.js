const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.bodyParser)

server.post('/auth', (req, res, next) => {
	console.log(req.body)
	if (req.body.email === "migikimi" && req.body.password === "123") { // add your authorization logic here
	   next() // continue to JSON Server router
	 } else {
	   res.sendStatus(401)
	 }
})

/* router.render = (req, res) => {
 let headersToExpose       = [ 'Authorization', 'X-Total-Count' ];
  let currentExposedHeaders = res.getHeader( 'Access-Control-Expose-Headers' );

  if ( currentExposedHeaders ) {
    res.header( 'Access-Control-Expose-Headers', headersToExpose.concat( currentExposedHeaders.split(',') ).join( ',' ) )
  } else {
    res.header( 'Access-Control-Expose-Headers', headersToExpose.join( ',' ) );
  }
  
  res.jsonp({
    body: res.locals.data
  })
} */


server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})