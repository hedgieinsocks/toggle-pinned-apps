.PHONY: help
help:
	@sed -nE '/^[a-z]+:/s/:.+#/\t/p' $(MAKEFILE_LIST) | GREP_COLORS='ms=01;36' grep --color=always -E '^\S+|'

.PHONY: schema
schema: ## compile glib schemas
	@glib-compile-schemas ./src/schemas/

.PHONY: pack
pack: ## pack extension
	@gnome-extensions pack ./src --force

.PHONY: install
install: ## install extension
	@gnome-extensions install --force ./toggle-pinned-apps@hedgie.tech.shell-extension.zip

.PHONY: all
all: schema pack install ## compile, pack and install
