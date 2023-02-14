-- CreateTable
CREATE TABLE "userTabel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "sname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "userTabel_pkey" PRIMARY KEY ("id")
);
