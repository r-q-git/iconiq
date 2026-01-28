export interface Icon {
    hash: string,
    name: string,
    imagePreviewUrl: string,
    isFree: boolean,
    familySlug: string,
    familyName: string,
    categorySlug: string,
    categoryName: string,
    subcategorySlug: string,
    subcategoryName: string
}

export interface IconResponse {
  query: string;
  results: Icon[]; // This links your existing Icon interface
  pagination: {
    total: number;
    hasMore: boolean;
    offset: number;
    nextOffset: number;
  };
}