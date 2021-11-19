.env:
	cp .env.example .env

.PHONY: setup
setup: .env
	npm install

.PHONY: up
up:
	npm start

deploy:
	npm run build
	firebase deploy