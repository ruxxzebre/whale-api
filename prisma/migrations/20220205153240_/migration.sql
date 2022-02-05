/*
  Warnings:

  - Added the required column `error` to the `Logs` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Logs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "containerId" INTEGER NOT NULL,
    "error" BOOLEAN NOT NULL,
    "data" BLOB NOT NULL,
    CONSTRAINT "Logs_containerId_fkey" FOREIGN KEY ("containerId") REFERENCES "Container" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Logs" ("containerId", "data", "id") SELECT "containerId", "data", "id" FROM "Logs";
DROP TABLE "Logs";
ALTER TABLE "new_Logs" RENAME TO "Logs";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
