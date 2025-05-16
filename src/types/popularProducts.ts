export type PopularProduct = {
  id: number;
  name: string;
  slug: string;
  image: string;
  prs: {
    price_tenge: number;
    price_euro: string;
    liters_per_unit: string;
  };
};
