# shellcheck shell=bash

task.publish() {
	local version="$1"
	bake.assert_not_empty 'version'

	pnpm version "$version"
}