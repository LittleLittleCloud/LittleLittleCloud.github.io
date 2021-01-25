.PHONY: resume watch clean

resume: resume-zh.html

watch:
	ls *.md *.css | entr make resume-zh

name := $(shell grep "^\#" resume-zh.md | head -1 | sed -e 's/^\#[[:space:]]*//' | xargs)

resume-zh.html: resource/preamble.html resume-zh.md resource/postamble.html
	cat resource/preamble.html | sed -e 's/___NAME___/$(name)/' > $@
	python3 -m markdown -x smarty resume-zh.md >> $@
	cat resource/postamble.html >> $@

clean:
	rm -f resume-zh.html
