const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://name-to-notes.laurosilva.com",
		"gaTrackingId": null
	},
	"header": {
		"logo": "",
		"logoLink": "/",
		"title": "Good Notes Template",
		"githubUrl": "https://github.com/laurosilvacom/goodnotestemplate",
		"helpUrl": "",
		"tweetText": "",
		"links": [
			{ "text": "", "link": ""}
		],
		"search": {
			"enabled": false,
			"indexName": "",
			"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
		}
	},
	"sidebar": {
		"forcedNavOrder": [
			"/introduction",
    		"/codeblock"
		],
    	"collapsedNav": [
      		"/codeblock"
    	],
		"links": [
			{ "text": "Lauro Silva", "link": "https://laurosilva.com"},
		],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
		"title": "Goog Notes | NameOfNotes",
		"description": "Documentation for Good Notes. Powering laurosilva.com ",
		"ogImage": null,
		"docsLocation": "https://github.com/laurosilvacom/goodnotestemplate",
		"favicon": "https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg"
	},
	"pwa": {
		"enabled": false, // disabling this will also remove the existing service worker.
		"manifest": {
			"name": "Good Notes Template",
			"short_name": "GoodNotesTemplate",
			"start_url": "/",
			"background_color": "#6b37bf",
			"theme_color": "#6b37bf",
			"display": "standalone",
			"crossOrigin": "use-credentials",
			icons: [
				{
					src: "src/pwa-512.png",
					sizes: `512x512`,
					type: `image/png`,
				},
			],
		},
	}
};

module.exports = config;
