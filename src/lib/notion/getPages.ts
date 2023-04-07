import { to } from "../utils";
import { notion, dbId } from "./notion";
import { errorHandler } from "./error";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export async function getPages() {
  const [err, data] = await to(notion.databases.query({
    database_id: dbId,
  }))
  if (err) {
    errorHandler(err)
    return
  }
  return data.results as PageObjectResponse[]
}