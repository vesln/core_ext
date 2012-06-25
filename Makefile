TESTS = test/*.test.js

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter dot \
		$(TESTS)

init:
	chmod 777 ./data

.PHONY: test init
