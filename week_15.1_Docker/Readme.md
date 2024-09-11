docker gives u to run ur code in the isolated enviroment means that if there are multiple projects are running then they cant talk to each other
it help u to run easly ur project in locally

create file "Doclerfile"
then write image which u want then write "workdir" then as /app
then command to run ur projects

"expose" the port
the CMD ["node ", "dist/index.js"]

then
docker build -t nameofurImage
then run this image
docker run -p 3000:3000 nameofurImage
