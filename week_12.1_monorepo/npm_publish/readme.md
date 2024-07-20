in the commmon folder we will have the code which use by the both frontend and backend

like a zod.infer

## how to puublish the file on the npm

first create separater common folder

initialize the typescript and

npx tsc -init

npm init

then in the tsconfig.ts make the
rootdir = src
outdir = dist
declaration = true

and then npm publish --access=public

in the common make the config.tsc make the decleration as true it will create and .b.tsc which contain the only type
