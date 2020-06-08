all: public_html/index.html

public_html/index.html: dist/build.js public_html
	node dist/build.js > public_html/index.html

public_html:
	mkdir public_html

dist/build.js:
	npm run build