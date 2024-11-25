"use server";

import { db } from "@/lib/prisma";
import { createTransactionSchema } from "@/schemas/transaction";
import { auth } from "@clerk/nextjs/server";
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { revalidatePath } from "next/cache";

interface CreateTransactionParams {
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export const getTransactions = async () => {
  return await db.transaction.findMany({});
};

export const createTransactions = async (params: CreateTransactionParams) => {
  createTransactionSchema.parse(params);

  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  await db.transaction.create({ data: { ...params, userId } });

  revalidatePath("/transactions");
};
