import { SpecsData } from "@/lib/define";

function handleSpecsData(raw_data: string[]) {
  let data_specs: SpecsData[] = [];

  for (const i in raw_data) {
    const result: string[] = raw_data[i].split(":");
    data_specs[i] = {
      header: result[0],
      specs: result[1],
    };
  }

  return data_specs;
}

export { handleSpecsData };
