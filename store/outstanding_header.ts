import { proxy } from "valtio";

type OutstandingList = {
  index: number;
  description: string;
  image: string;
};

export const outstanding_list = proxy<{
  list: Array<OutstandingList>;
}>({
  list: [
    {
      index: 0,
      description: "This is Event 1",
      image: "Image",
    },
    {
      index: 1,
      description: "This is Event 2",
      image: "Image",
    },
    {
      index: 2,
      description: "This is Event 3",
      image: "Image",
    },
    {
      index: 3,
      description: "This is Event 4",
      image: "Image",
    },
    {
      index: 4,
      description: "This is Event 5",
      image: "Image",
    },
    {
      index: 55,
      description: "This is Event 6",
      image: "Image",
    },
    {
      index: 6,
      description: "This is Event 7",
      image: "Image",
    },
    {
      index: 7,
      description: "This is Event 8",
      image: "Image",
    },
  ],
});
