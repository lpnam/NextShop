import ItemCard from "@/ui/ItemCard";
import { InitItem } from "@/lib/define";
import { GetDataListByName } from "@/store/data_list";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | "" };
}) {
  const { opt } = searchParams;
  const data = await GetDataListByName(opt);

  return (
    <div className="body-inside bg-slate-300 h-auto px-1">
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
