"use server";

import { db } from "@/lib/prisma";

export const getTransactions = async () => {
  return await db.transaction.findMany({});
};
