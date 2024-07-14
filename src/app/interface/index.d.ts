declare global {
  namespace Express {
    interface Request {
      parsedQuery: IParsedQuery;
    }
  }
}
