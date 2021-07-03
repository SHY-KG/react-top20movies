// Component
export interface IGetMovie {
  id: number;
  background_image: string;
  background_image_original: string;
  genres: Array<String>;
  rating: number;
  runtime: number;
  small_cover_image: string;
  large_cover_image: string;
  medium_cover_image: string;
  summary: string;
  title: string;
  year: number;
}

// Constainer
export type MovieProps = Pick<
  IGetMovie,
  'medium_cover_image' | 'year' | 'rating' | 'title' | 'summary'
>;
