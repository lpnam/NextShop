import { proxy } from "valtio";

type Banner = {
  name: string;
  url: string;
  id: number;
  index: number;
};
type ArrayBanner = Array<Banner>;

export const banner_data = proxy<{
  banners: ArrayBanner;
  actived_index: number;
}>({
  banners: [
    {
      index: 0,
      name: "asus_banner",
      url: "/asus_banner.webp",
      id: 0,
    },
    {
      index: 1,
      name: "msi_banner",
      url: "/msi_banner.jpeg",
      id: 1,
    },
    {
      index: 2,
      name: "razer_banner",
      url: "/razer_banner.webp",
      id: 2,
    },
    {
      index: 3,
      name: "audeze_banner",
      url: "/audeze_banner.webp",
      id: 3,
    },
  ],
  actived_index: 0,
});
