// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {

}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/teodorstefu/site-ng/.cache/dev-404-page.js")),
  "component---src-pages-index-en-js": preferDefault(require("/Users/teodorstefu/site-ng/src/pages/index.en.js"))
}

exports.json = {
  "dev-404-page.json": require("/Users/teodorstefu/site-ng/.cache/json/dev-404-page.json"),
  "en.json": require("/Users/teodorstefu/site-ng/.cache/json/en.json")
}