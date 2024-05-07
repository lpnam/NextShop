import { proxy } from "valtio";

type OutstandingList = {
  index: number;
  description: string;
  image: string;
  direct: string;
};

export const outstanding_list = proxy<{
  list: Array<OutstandingList>;
}>({
  list: [
    {
      index: 0,
      description: "This is Event 1",
      image: "Image",
      direct: "/all",
    },
    {
      index: 1,
      description: "This is Event 2",
      image: "Image",
      direct: "/all",
    },
    {
      index: 2,
      description: "This is Event 3",
      image: "Image",
      direct: "/all",
    },
    {
      index: 3,
      description: "This is Event 4",
      image: "Image",
      direct: "/all",
    },
    {
      index: 4,
      description: "This is Event 5",
      image: "Image",
      direct: "/all",
    },
    {
      index: 5,
      description: "This is Event 6",
      image: "Image",
      direct: "/all",
    },
    {
      index: 6,
      description: "This is Event 7",
      image: "Image",
      direct: "/all",
    },
    {
      index: 7,
      description: "This is Event 8",
      image: "Image",
      direct: "/all",
    },
  ],
});
