.PHONY: resume watch clean

resume: resume-en.html resume-zh.html

watch:
	ls *.md *.css | entr make resume-zh

name_zh := $(shell grep "^\#" resume-zh.md | head -1 | sed -e 's/^\#[[:space:]]*//' | xargs)
name_en := $(shell grep "^\#" resume-en.md | head -1 | sed -e 's/^\#[[:space:]]*//' | xargs)

resume-zh.html: resource/preamble.html resume-zh.md resource/postamble.html
	cat resource/preamble.html | sed -e 's/___NAME___/$(name_zh)/' > $@
	python3 -m markdown -x smarty resume-zh.md >> $@
	cat resource/postamble.html >> $@

resume-en.html: resource/preamble.html resume-en.md resource/postamble.html
	cat resource/preamble.html | sed -e 's/___NAME___/$(name_en)/' > $@
	python3 -m markdown -x smarty resume-en.md >> $@
	cat resource/postamble.html >> $@

clean:
	rm -f resume-zh.html && rm -f resume-en.html
