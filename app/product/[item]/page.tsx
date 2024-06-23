import { InitItem, SpecsData } from "@/lib/define";
import { handleSpecsData } from "@/utils/handle/handle_specs_data";
import {
  GetDetailData,
  GetSubDataList,
  GetSpecsDetail,
} from "@/store/data_list";
import ItemDetail from "@/ui/ItemDetail";
import ItemSubCard from "@/ui/ItemSubCard";
import SpecsList from "@/ui/SpecsList";

export default async function Page({ params }: { params: { item: string } }) {
  const { item } = params;
  console.log(params);
  const data = await GetDetailData(item);
  const specs_raw_data: string[] = await GetSpecsDetail(data.item_id);
  const list_specs: SpecsData[] = handleSpecsData(specs_raw_data);
  const tag_list: InitItem[] = await GetSubDataList(data.item_id);

  return (
    <div className="body-inside h-auto">
      <div className="ssm:h-[1000px] md:h-[500px] p-4 rounded-md border bg-slate-300">
        <ItemDetail
          item={{
            name: data.item_name,
            price: data.item_price,
            image: data.item_image,
            date: data.date_in,
            code_name: data.code_name,
            key: data.item_id,
          }}
        />
      </div>
      <div className="rounded-md mb-1 xl:flex gap-1 mt-1">
        <div className="rounded-md relative flex-grow-[7] xl:max-w-[70%] bg-slate-300 text-black p-2 pb-6">
          <SpecsList specs_list={list_specs} />
        </div>
        <div className="rounded-md flex-grow-[3] ssm:mt-1 md:grid md:grid-cols-2 md:gap-1 xl:max-w-[30%] xl:mt-0 xl:block">
          {tag_list.map((item: InitItem) => {
            if (item.item_id !== data.item_id) {
              return (
                <ItemSubCard
                  item={{
                    name: item.item_name,
                    price: item.item_price,
                    image: item.item_image,
                    date: item.date_in,
                    code_name: item.code_name,
                    key: item.item_id,
                  }}
                />
              );
            } else return;
          })}
        </div>
      </div>
    </div>
  );
}
