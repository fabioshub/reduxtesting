import pots from '../images/productgroups/Pottenschalen/PottenS.jpg';
import potm from '../images/productgroups/Pottenschalen/PottenM.jpg';
import potl from '../images/productgroups/Pottenschalen/PottenL.jpg';
import vaass from '../images/productgroups/Pottenschalen/VazenS.jpg';
import vaasm from '../images/productgroups/Pottenschalen/VazenM.jpg';
import vaasl from '../images/productgroups/Pottenschalen/VazenL.jpg';

import kunstplanten from '../images/productgroups/Kunstplanten/Kunstplanten.jpg';

import kussenhoezen from '../images/productgroups/stoffenenverf/Kussenhoezen.jpg';
import plaids from '../images/productgroups/stoffenenverf/Plaids.jpg';
import verf from '../images/productgroups/stoffenenverf/Verf.jpg';
import vloerkleden from '../images/productgroups/stoffenenverf/Vloerkleden.jpg';

import bestek from '../images/productgroups/Keuken/Bestek.jpg';
import servies from '../images/productgroups/Keuken/Servies.jpg';
import glaswerk from '../images/productgroups/Keuken/Glaswerk.jpg';
import dienbladen from '../images/productgroups/Keuken/Dienbladen.jpg';

import kasten from '../images/productgroups/Meubels/Kasten.jpg';
import tafels from '../images/productgroups/Meubels/Tafels.jpg';
import stoelen from '../images/productgroups/Meubels/Stoelen.jpg';
import krukjes from '../images/productgroups/Meubels/Krukjes.jpg';

import decowandpaneel from '../images/productgroups/Wanddecoratie/Decowandpaneel.jpg';
import wandhaken from '../images/productgroups/Wanddecoratie/Wandhaken.jpg';
import klokken from '../images/productgroups/Wanddecoratie/Klokken.jpg';
import spiegel from '../images/productgroups/Wanddecoratie/Spiegels.jpg';
import schilderijen from '../images/productgroups/Wanddecoratie/Schilderijen.jpg';

import hanglampen from '../images/productgroups/Verlichting/Hanglampen.jpg';
import wandlampen from '../images/productgroups/Verlichting/Wandlampen.jpg';
import staandelampen from '../images/productgroups/Verlichting/Staandelampen.jpg';
import tafellampen from '../images/productgroups/Verlichting/Tafellampen.jpg';
import lampenkappen from '../images/productgroups/Verlichting/Lampenkappen.jpg';

import Windlichten from '../images/productgroups/Accessoires/Windlichten.jpg';
import Standbeelden from '../images/productgroups/Accessoires/Standbeelden.jpg';
import Manden from '../images/productgroups/Accessoires/Manden.jpg';
import Fotolijsten from '../images/productgroups/Accessoires/Fotolijsten.jpg';
import Stolp from '../images/productgroups/Accessoires/Stolp.jpg';
import Etagere from '../images/productgroups/Accessoires/Etagere.jpg';
import Wijnkoelers from '../images/productgroups/Accessoires/wijnkoelers.jpg';
import Opbergen from '../images/productgroups/Accessoires/Opbergen.jpg';
import Decoratiehanger from '../images/productgroups/Accessoires/Decoratiehanger.jpg';


export const PRODUCTGROUPS = [//catCode
	{
		category: "3",
		names: {
			"FRA": "Pots & Bols",
			"DEU": "Töpfe & Schalen",
			"NLD": "Potten & Schalen",
			"ENU": "Pots & Bowls"
		},
		productgroupsitem: [

			{
				productgroup: '11111', //for onclicktoitems
				name: 'Potten klein',
				image: pots
			},
			{
				productgroup: '11112', //for onclicktoitems
				name: 'Potten medium',
				image: potm
			},
			{
				productgroup: '11113', //for onclicktoitems
				name: 'Potten groot',
				image: potl
			},
			{
				productgroup: '22221', //for onclicktoitems
				name: 'Vazen klein',
				image: vaass
			},
			{
				productgroup: '22222', //for onclicktoitems
				name: 'Vazen medium',
				image: vaasm
			},
			{
				productgroup: '22223', //for onclicktoitems
				name: 'Vazen groot',
				image: vaasl
			},
		]
	},
	{
		category: "7",
		names: {
			"FRA": "Tissus & Peinture",
			"DEU": "Textilien & Farbe",
			"NLD": "Stoffen & Verf",
			"ENU": "Fabrics & Paint"
		},
		productgroupsitem: [

			{
				productgroup: '10065', //for onclicktoitems
				name: 'Plaids',
				image: plaids
			},
			{

				productgroup: '10010', //for onclicktoitems
				name: 'Kussenhoezen',
				image: kussenhoezen
			},
			{
				productgroup: '10080', //for onclicktoitems
				name: 'Vloerkleden',
				image: vloerkleden
			},
			{
				productgroup: '20000', //for onclicktoitems
				name: 'Verf',
				image: verf
			},
		]
	},
	{
		category: "6",
		names: {
			"FRA": "Plantes artificielle",
			"DEU": "Kunstpflanzen",
			"NLD": "Kunstplanten",
			"ENU": "Artificial plants"
		},
		productgroupsitem: [

			{
				productgroup: '18040', //for onclicktoitems
				name: 'Kunstplanten',
				image: kunstplanten
			},
		]
	},
	{
		category: "4",
		names: {
			"FRA": "Cuisine",
			"DEU": "Küche",
			"NLD": "Keuken",
			"ENU": "Kitchen"
		},
		productgroupsitem: [

			{
				productgroup: '16015', //for onclicktoitems
				name: 'Bestek',
				image: bestek
			},
			{

				productgroup: '16010', //for onclicktoitems
				name: 'Servies',
				image: servies
			},
			{
				productgroup: '16020', //for onclicktoitems
				name: 'Glaswerk',
				image: glaswerk
			},
			{
				productgroup: '04010', //for onclicktoitems
				name: 'Dienbladen',
				image: dienbladen
			},
		]
	},
	{
		category: "1",
		names: {
			"NLD": "Klein meubelen",
		},
		productgroupsitem: [

			{
				productgroup: '12040', //for onclicktoitems
				name: 'Kasten',
				image: kasten
			},
			{

				productgroup: '12010', //for onclicktoitems
				name: 'Tafels',
				image: tafels
			},
			{
				productgroup: '12020', //for onclicktoitems
				name: 'Stoelen',
				image: stoelen
			},
			{
				productgroup: '12015', //for onclicktoitems
				name: 'Krukjes',
				image: krukjes
			},
		]
	},
	{
		category: "5",
		names: {
			"FRA": "Déco murale",
			"DEU": "Wanddekoration",
			"NLD": "Wanddecoratie",
			"ENU": "Wall decoration"
		},
		productgroupsitem: [

			{
				productgroup: '08100', //for onclicktoitems
				name: 'Deco wandpaneel',
				image: decowandpaneel
			},
			{

				productgroup: '05010', //for onclicktoitems
				name: 'Wandhaken',
				image: wandhaken
			},
			{
				productgroup: '08035', //for onclicktoitems
				name: 'Klokken',
				image: klokken
			},
			{
				productgroup: '17010', //for onclicktoitems
				name: 'Spiegel',
				image: spiegel
			},
			{
				productgroup: '08105', //for onclicktoitems
				name: 'Schilderijen',
				image: schilderijen
			},
			{
				productgroup: '20000', //for onclicktoitems
				name: 'Verf',
				image: verf
			},
		]
	},
	{
		category: "11",
		names: {
			"FRA": "Luminaires",
			"DEU": "Beleuchtung",
			"NLD": "Verlichting",
			"ENU": "Lighting"
		},
		productgroupsitem: [

			{
				productgroup: '21011', //for onclicktoitems
				name: 'Hanglampen',
				image: hanglampen
			},
			{

				productgroup: '21014', //for onclicktoitems
				name: 'Wandlampen',
				image: wandlampen
			},
			{
				productgroup: '21012', //for onclicktoitems
				name: 'Staande lampen',
				image: staandelampen
			},
			{
				productgroup: '21013', //for onclicktoitems
				name: 'Tafellampen',
				image: tafellampen
			},
			{
				productgroup: '21020', //for onclicktoitems
				name: 'Lampenkappen',
				image: lampenkappen
			},
		]
	},
	{
		category: "10",
		names: {
			"FRA": "Accessoires",
			"DEU": "Zubehör",
			"NLD": "Accessoires",
			"ENU": "Accessories"
		},
		productgroupsitem: [

			{
				productgroup: '09080', //for onclicktoitems
				name: 'Windlichten',
				image: Windlichten
			},
			{

				productgroup: '13010', //for onclicktoitems
				name: 'Standbeelden',
				image: Standbeelden
			},
			{
				productgroup: '02020', //for onclicktoitems
				name: 'Manden',
				image: Manden
			},
			{
				productgroup: '14010', //for onclicktoitems
				name: 'Fotolijsten',
				image: Fotolijsten
			},
			{
				productgroup: '01115', //for onclicktoitems
				name: 'Stolp',
				image: Stolp
			},
			{

				productgroup: '041110', //for onclicktoitems
				name: 'Etagere',
				image: Etagere
			},
			{
				productgroup: '16030', //for onclicktoitems
				name: 'Wijnkoelers',
				image: Wijnkoelers
			},
			{
				productgroup: '08030', //for onclicktoitems
				name: 'Opbergen',
				image: Opbergen
			},
			{
				productgroup: '08150', //for onclicktoitems
				name: 'Decoratie hanger',
				image: Decoratiehanger
			},
		]
	},
]
