all: public_html/index.html

public_html/index.html: dist/server.js public_html
	node dist/server.js > public_html/index.html

public_html:
	mkdir public_html

dist/server.js:
	npm run build