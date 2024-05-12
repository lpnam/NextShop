import ItemCard from "@/ui/ItemCard";
import { InitItem } from "@/lib/define";
import { GetDataList } from "@/store/tag_list";

export default async function Page({
  params,
}: {
  params: { component: string };
}) {
  const { component } = params;
  const data = await GetDataList(component);
  // const supabase = createClient();
  // const { data, error } = await supabase
  //   .from("item")
  //   .select(
  //     `item_id, item_name, item_price, item_image, date_in, code_name, tag_list( tag_id, tag_name )`
  //   );

  // console.log(data);
  return (
    <main>
      <div className="body-container bg-slate-300 h-auto px-1">
        <div className="h-[125px] rounded-t-md border border-red-500 mb-1"></div>
        <div className="rounded-b-md grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-1">
          {data?.map((item: InitItem, index: number) => {
            return (
              <ItemCard
                name={item.item_name}
                price={item.item_price}
                image={item.item_image}
                date={item.date_in}
                code_name={item.code_name}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}