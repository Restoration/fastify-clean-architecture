.PHONY: init
init:
	cp ./infrastructure/env/dotenv.local .env && cp ./infrastructure/env/dotenv.local ./infrastructure/docker/.env

.PHONY: up
up:
	docker-compose up