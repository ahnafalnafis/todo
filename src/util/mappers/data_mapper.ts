export interface DataMapper<Type, EntityType> {
  toEntity(data: Type): EntityType;
  toObject(entity: EntityType): object;
  toJson(entity: EntityType): string;
}
