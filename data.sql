PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO User VALUES('cly1oo5qa0004cp0amruqz25f','noya@gmail.com','noya12','elsanoya',1719759949570,1719759960291);
INSERT INTO User VALUES('cly1oorsp0005cp0ahq8nsmdp','kurbawa@gmail.com','kurbawa12','lllon123',1719759978170,1719759986399);
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
COMMIT;
