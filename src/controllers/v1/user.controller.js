const get = (req, res, next) => {
	try {
		console.log(req.query.rest)
	  return res.json({message: 'users get'})
	} catch (e) {
		next(3)
	}
}

export {
  get
}