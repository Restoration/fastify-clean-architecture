.PHONY: init
init:
	cp ./infrastructure/env/dotenv.local .env && cp ./infrastructure/env/dotenv.local ./infrastructure/docker/.env

.PHONY: docker
docker:
	cd infrastructure/docker && docker-compose up -d && cd ../../