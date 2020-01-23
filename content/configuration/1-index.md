---
title: "Search Configuration"
metaTitle: "Search Configuration for Good Notes Template"
metaDescription: "This is the meta description for this page"
---

To setup Algolia, go to `config.js` and update the `search` object to look like the one below:

```
"search": {
	"enabled": true,
	"indexName": "MY_INDEX_NAME",
	"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
	"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
	"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
},
```

Values for Algolia App ID, Search Key, and Admin Key can be obtained from Algolia Dashboard with the right set of permissions. Replace `MY_INDEX_NAME` with the Algolia Index name of your choice. To build the Algolia index, you need to run `npm run build` which will do a gatsby build along with content indexing in Algolia.
