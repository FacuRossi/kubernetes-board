module.exports = (app) => {
	var podController = require('../controllers/PodController')

  	app.route('/pod')
    	.get(podController.getPodByNamespace)
}