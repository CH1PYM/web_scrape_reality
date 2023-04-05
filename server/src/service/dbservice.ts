import { PrismaClient } from "@prisma/client";
import { FlatRecord } from "@prisma/client";
import { FlatRecordCustom } from "../types/types";
const prisma = new PrismaClient();

export const saveToDB = async (
  flatName: string,
  imgURL: string
): Promise<FlatRecord> => {
  const record = await prisma.flatRecord.create({
    data: {
      flatName,
      imgURL,
    },
  });
  return record;
};
export const loadRecord = async (
  currentPage: number,
  countPerPage: number
): Promise<FlatRecord[]> => {
  const result = await prisma.flatRecord.findMany({
    skip: currentPage * countPerPage,
    take: countPerPage,
  });
  return result;
};

export const getCount = async (): Promise<number> => {
  const count = await prisma.flatRecord.count();
  return count;
};
export const saveArray = async (
  flatRecordArray: FlatRecordCustom[]
): Promise<void> => {
  flatRecordArray.forEach(async (flatRecord) => {
    await saveToDB(flatRecord.name, flatRecord.url);
  });
};
