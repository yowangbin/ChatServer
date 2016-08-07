TESTS = $(shell ls -S `find test -type f -name "*.test.js" -print`)
REPORTER = spec
TIMEOUT = 3000
MOCHA_OPTS =
REGISTRY = "--registry=http://registry.npm.taobao.org"

install:
	@npm install $(REGISTRY)

watch:
	@./node_modules/.bin/watchify \
		public/js/app.js \
		--debug \
		--transform reactify \
		--transform envify \
		-v \
		-o public/js/bundle.js

build:
	@NODE_ENV=production ./node_modules/.bin/browserify \
	public/js/app.js \
	--transform reactify \
	--transform envify \
	-o public/js/bundle.js

.PHONY: test
