install:
	npm ci

lint:
	eslint .

lint-fix:
	eslint --fix .

test-numbers:
	npx jest __tests__/numbers.test.js

test-boolean:
	npx jest __tests__/boolean.test.js

test-loops:
	npx jest __tests__/loops.test.js

test-branching:
	npx jest __tests__/branching.test.js

test-strings:
	npx jest __tests__/strings.test.js
