
const route = server => {
	server.post('/data', (req, res) => {
		console.log(req.body.params);
		const pageNumber = req.body.params.pageNumber;
		const pageAmount = req.body.params.pageAmount;
		const productGroup = req.body.params.productGroup;
		axios.get(`http://10.245.4.17:8983/solr/ptc/select?fq=productgroup:${productGroup}&q=*:*&rows=${pageAmount}&start=${pageNumber}`)
			.then(result => res.json(HttpStatus.OK, result.data.response))
			.catch(err => {
				console.log(err.response);
				console.error(err.response.data);
				res.json(HttpStatus.INTERNAL_SERVER_ERROR, {
					error: 'An error occurred'
				});
			});
	});
};
