import ItemCard from "@/ui/ItemCard";
import { InitItem } from "@/lib/define";
import { GetDataList } from "@/store/data_list";

export default async function Page({
  params,
}: {
  params: { component: string; slug: string };
}) {
  const { component, slug } = params;
  const data = await GetDataList(component, slug);

  return (
    <div className="body-inside bg-slate-300 h-auto px-1 flex-grow-[4] min-h-[50vh]">
      <div className="h-[125px] rounded-t-md mb-1"></div>
      <div className="rounded-b-md grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-1">
        {data?.map((item: InitItem) => {
          return (
            <ItemCard
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
        })}
      </div>
    </div>
  );
}
