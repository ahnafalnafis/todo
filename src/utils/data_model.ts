export interface DataModel<TData, TSelf> {
  parse(data: TData): TSelf;
  toJson(): string;
}
