export type TBlog = {
  title: string;
  content: string;
  image: string;
  category: string;
  writer: string;
  writerId: string | number;
  writerEmail: string;
  isEnable: "yes" | "no";
  pin: "yes" | "no";
};
