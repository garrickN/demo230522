export interface IBaseResponse {}
export interface PaginationResponse<T> {
  docs: Array<T>;
  totalDocs: number;
  limit: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  page: number;
  totalPages: number;
}
