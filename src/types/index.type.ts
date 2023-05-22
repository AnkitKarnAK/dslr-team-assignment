export type ProductType = {
  id: number;
  slug: string;
  code: string;
  productId: number;
  name: string;
  description: string;
  blouseAttached: boolean;
  blouseFabric: string;
  sareeFabric: string;
  mrp: number;
  listingPrice: number;
  discount: number;
  isActive: boolean;
  isAvailable: boolean;
  supplierId: number;
  supplierName: string;
  availableQty: number;
  primaryImage: {
    jpegImages: {
      lImage: string;
      mImage: string;
      sImage: string;
      xsImage: string;
    };
    webpImages: {
      lImage: string;
      mImage: string;
      sImage: string;
      xsImage: string;
    };
  };
};

export type CollectionsType = ProductType[];
