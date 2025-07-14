export type TService = {
  title: string;
  image: string;
  shortDescription: string;
  description: string;
  skillAndTools: {
    title: string;
    percent: number;
  }[];
  order: number;
};
