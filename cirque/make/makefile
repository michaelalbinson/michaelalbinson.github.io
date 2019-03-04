l1head=head/compiled/l1.html
l1foot=footer/compiled/l1.html
space=echo "\n\n"

website: ./head/ ./footer/ index.html delegates speakers partners spotlight faq

./head/:
	cd head && $(MAKE) && $(space)

./footer/:
	cd footer && $(MAKE) && $(space)

index.html: ./head/ splash.html cards.html taster.html about.html cranes.html ./footer/
	cat head/compiled/root.html splash.html cards.html index/apps.html about.html team.html cranes.html footer/compiled/root.html > ../index.html

delegates: ./head/ ./footer/
	cat $(l1head) delegates/delegates_top.html delegates/delegates_old.html $(l1foot) > ../delegates/index.html

speakers: ./head/ ./footer/
	cat $(l1head) speakers/speakers_top.html speakers/current_speakers.html speakers/speakers_coords.html speakers/past_speakers.html $(l1foot) > ../speakers/index.html

partners: ./head/ ./footer/
	cat $(l1head) partners/sponsors_top.html partners/current_sponsors.html partners/sponsors_coords.html partners/past_sponsors.html $(l1foot) > ../partners/index.html

spotlight: ./head/ ./footer/
	cd spotlight && $(MAKE) && $(space)

faq: ./head/ ./footer/
	cd FAQ && $(MAKE) && $(space)

photo-bar:
	cd photo-bar && $(MAKE) && $(space)