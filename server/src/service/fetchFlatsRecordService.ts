const axios = require("axios");
import { PrismaClient } from "@prisma/client";
import { FlatRecordCustom, Flat } from "../types/types";
import { saveToDB, saveArray } from "./dbservice";
const prisma = new PrismaClient();

export const fetchFlatsRecords = async (
  flatsToDownload: number,
  flatsPerPage: number
): Promise<void> => {
  const flatToSaveToDB: FlatRecordCustom[] = [];
  const pagesToDownload = flatsToDownload / flatsPerPage;
  const apiEndpoint = "https://www.sreality.cz/api/cs/v2/estates";

  for (let page = 0; page < pagesToDownload; page++) {
    const params = {
      category_main_cb: 1,
      category_type_cb: 1,
      page,
      per_page: flatsPerPage,
      tms: 1680247639213,
    };
    const response = await axios.get(apiEndpoint, { params });
    response.data._embedded.estates.forEach(async (flat: Flat) => {
      const name: string = flat.name;
      const imgUrl: string = flat._links.images[0].href;
      flatToSaveToDB.push({ name: name, url: imgUrl });
    });
  }
  saveArray(flatToSaveToDB);
};
