export interface IParsedQuery {
  searchTerm?: string;
  categories?: string[];
  sort: "asc" | "desc";
}

declare global {
  namespace Express {
    interface Request {
      parsedQuery: IParsedQuery;
    }
  }
}
