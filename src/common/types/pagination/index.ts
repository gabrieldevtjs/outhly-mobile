export interface IRequestPagination {
  pageIndex: number
  pageSize: number
}

type QueryType = {
  id: string
  value: string
}[]

export interface IRequestQueryWithPagination {
  pagination: IRequestPagination
  query?: QueryType | string
  sort?: string
}
export interface ApiResponseType<T> {
  map(arg0: (item: any) => any): unknown
  message: string
  data: T
}

export interface IMetaPagination {
  currentPage: number
  total: number
  numberPages: number
  perPage: number
  informacoes_extras: Record<string, any>
}

export interface ApiResponsePaginationType<T> extends ApiResponseType<T> {
  meta: IMetaPagination
}
