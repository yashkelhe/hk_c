npm init -y
npm install prisma typescript ts-node @types/node --save-dev
npx tsc --init

##### change the rootDir and outDir

npx prisma init // it will create an folder where the schema of the prisma

# add the table in the prisma file and then

npx prisma migrate dev --name GiveTheMigrationName

# to generate the autogenrated Client

npx prisma generate

# prisma migration
