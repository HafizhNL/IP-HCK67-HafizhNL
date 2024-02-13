npx sequelize-cli model:generate --name User --attributes userName:string,email:string,password:string

npx sequelize-cli model:generate --name Category --attributes name:string

npx sequelize-cli model:generate --name Product --attributes name:string,imgUrl:string,memory:string,storage:string,batteryCapacity:string,price:string,CategoryId:integer,UserId:integer

