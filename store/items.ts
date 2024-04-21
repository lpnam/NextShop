import { proxy } from "valtio";

type ComponentPC = {
  name: string;
  icon: string;
  child: Array<string>;
};
type ArrayComponent = Array<ComponentPC>;

export const component_list = proxy<{
  components: ArrayComponent;
}>({
  components: [
    {
      name: "Monitor",
      icon: "/icon/monitor.png",
      child: [
        "Full-HD(1,920×1,080)",
        "2K-QuadHD(2,560×1,440)",
        "4K-UltraHD(3,840×2,160)",
        "8K-UltraHD(7,680×4,320)",
      ],
    },
    {
      name: "RAM",
      icon: "/icon/ram.png",
      child: ["PC", "Laptop"],
    },
    {
      name: "Storage",
      icon: "/icon/storage.png",
      child: ["SSD", "HDD"],
    },
    {
      name: "PSU",
      icon: "/icon/psu.png",
      child: ["Bronze", "Silver", "Gold", "Platinum", "Titanium"],
    },
    {
      name: "Keyboard",
      icon: "/icon/keyboard.png",
      child: [],
    },
    {
      name: "Mouse",
      icon: "/icon/mouse.png",
      child: [],
    },
    {
      name: "GPU",
      icon: "/icon/gpu.png",
      child: ["AMD", "Intel", "Nvidia"],
    },
    {
      name: "CPU",
      icon: "/icon/cpu.png",
      child: ["AMD", "Intel"],
    },
  ],
});
