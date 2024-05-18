import { InitItem, SpecsData } from "@/lib/define";
import { handleSpecsData } from "@/utils/handle/handle_specs_data";
import {
  GetDetailData,
  GetSubDataList,
  GetSpecsDetail,
} from "@/store/data_list";
import ItemDetail from "@/ui/ItemDetail";
import ItemSubCard from "@/ui/ItemSubCard";

export default async function Page({ params }: { params: { item: string } }) {
  const { item } = params;
  const data = await GetDetailData(item);
  const specs_raw_data: string[] = await GetSpecsDetail(data.item_id);
  const list_specs: SpecsData[] = handleSpecsData(specs_raw_data);
  const tag_list: InitItem[] = await GetSubDataList(data.item_id);

  return (
    <main>
      <div className="body-container h-auto px-1">
        <div className="h-[500px] p-4 rounded-md border bg-slate-300">
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
        <div className="rounded-md mb-1 flex gap-1 mt-1">
          <div className="rounded-md flex-grow-[7] max-w-[70%] bg-slate-300 text-black p-2">
            <h1 className="max-w-[80%] m-auto font-bold text-2xl my-6">
              {" "}
              Product Specifications
            </h1>
            <div className="max-w-[80%] m-auto mb-6">
              <hr className="border-gray-500" />
              {list_specs.map((each, index) => {
                return (
                  <>
                    <div className="mt-4 flex justify-between" key={index}>
                      <span>{each.header}</span>
                      <span>{each.specs}</span>
                    </div>
                    <hr className="border-gray-500" />
                  </>
                );
              })}
            </div>
          </div>
          <div className="rounded-md bg-slate-300 flex-grow-[3] max-w-[30%]">
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
    </main>
  );
}
