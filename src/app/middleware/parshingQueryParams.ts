import { RequestHandler } from "express";
import qs from "qs";

const parseQueryParams: RequestHandler = (req, res, next) => {
  const queryString = req.url.split("?")[1];

  // console.log('🚀 ~ queryString:', queryString)

  const query = qs.parse(queryString, { comma: true });

  // console.log('🚀 ~ query:', query)

  const searchTerm = (query.searchTerm as string) || "";
  const categories = (query.categories as string[]) || [];
  const sort = (query.sort as "asc" | "desc") || "";

  req.parsedQuery = {
    searchTerm,
    categories,
    sort,
  };

  next();
};

export default parseQueryParams;
