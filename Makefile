
build: node_modules
	node index.js

node_modules: package.json
	npm install

watch: node_modules
	node watch.js

.PHONY: build
