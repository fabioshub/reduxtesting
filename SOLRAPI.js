
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


export const productOrder = [
    {
        code: '3',
        ja: 'test',
        items: [
            new CustomProductGroup('pot-s', { NLD: 'Pot S', ENU: 'Pot S', DEU: 'Topf S', FRA: 'Pot S' }, getProductGroupImage('Potten & Schalen/Potten S.jpg'), [ '01070', '01050' ]),
            new CustomProductGroup('pot-m', { NLD: 'Pot M', ENU: 'Pot M', DEU: 'Topf M', FRA: 'Pot M' }, getProductGroupImage('Potten & Schalen/Potten M.jpg'), [ '01040', '01030' ]),
            new CustomProductGroup('pot-l', { NLD: 'Pot L', ENU: 'Pot L', DEU: 'Topf L', FRA: 'Pot L' }, getProductGroupImage('Potten & Schalen/Potten L.jpg'), [ '01060', '01080' ]),
            new CustomProductGroup('vaas-s', { NLD: 'Vaas S', ENU: 'Vase S', DEU: 'Vass S', FRA: 'Vase S' }, getProductGroupImage('Potten & Schalen/Vazen S.jpg'), [ '02080', '02060' ]),
            new CustomProductGroup('vaas-m', { NLD: 'Vaas M', ENU: 'Vase M', DEU: 'Vass M', FRA: 'Vase M' }, getProductGroupImage('Potten & Schalen/Vazen M.jpg'), [ '02050', '02040' ]),
            new CustomProductGroup('vaas-l', { NLD: 'Vaas L', ENU: 'Vase L', DEU: 'Vass L', FRA: 'Vase L' }, getProductGroupImage('Potten & Schalen/Vazen L.jpg'), [ '02070' ]),
            '01110',
            '01130',
            '02010',
            '01115',
        ],
    },
    {
        code: '6',
        items: [
            '18040',
        ],
    },
    {
        code: '10',
        items: [
            '09080',
            '13010',
            '02020',
            '14010',
            '01115',
            '04110',
            '16030',
            '08030',
            '08150',
        ],
    },
    {
        code: '11',
        items: [
            '21011',
            '21014',
            '21012',
            '21013',
            '21020',
        ],
    },
    {
        code: '5',
        items: [
            '08100',
            '05010',
            '08035',
            '17010',
            '08105',
            '20000',
        ],
    },
    {
        code: '1',
        items: [
            '12040',
            '12010',
            '12020',
            '12015',
        ],
    },
    {
        code: '4',
        items: [
            '16015',
            '16010',
            '16020',
            '04010',
        ],
    },
    {
        code: '7',
        items: [
            '10065',
            '10010',
            '10080',
            '20000',
        ],
    },
];