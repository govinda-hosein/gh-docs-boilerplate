#---------------- Older 'docker-compose' commands ----------------
# Prod
.PHONY: build-prod-v1
build-prod-v1:
	docker-compose --env-file=.env -p gh-docs-boilerplate build

.PHONY: start-prod-v1
start-prod-v1:
	docker-compose --env-file=.env -p gh-docs-boilerplate up -d

.PHONY: stop-prod-v1
stop-prod-v1:
	docker-compose --env-file=.env -p gh-docs-boilerplate down

.PHONY: deploy-prod
deploy-prod-v1:
	make build-prod-v1
	make stop-prod-v1
	make start-prod-v1

#---------------- Newer 'docker compose' commands ----------------
# Prod
.PHONY: build-prod
build-prod:
	docker compose --env-file=.env -p gh-docs-boilerplate build

.PHONY: start-prod
start-prod:
	docker compose --env-file=.env -p gh-docs-boilerplate up -d

.PHONY: stop-prod
stop-prod:
	docker compose --env-file=.env -p gh-docs-boilerplate down

.PHONY: deploy-prod
deploy-prod:
	make build-prod
	make stop-prod
	make start-prod