release:
	rsync -ac --delete --exclude=.git --exclude=Makefile --exclude=.nojekyll ../orbnet-website/dist/ . && git add . && git commit -m "chore: update" && git push


