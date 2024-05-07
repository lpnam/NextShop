import { createClient } from "@/utils/supabase/server";
import ItemCard from "@/ui/ItemCard";

export default async function Page() {
  const supabase = createClient();
  const { data } = await supabase.from("item").select();

  return (
    <main>
      <div className="body-container bg-slate-300 h-auto px-1">
        <div className="h-[125px] rounded-t-md border border-red-500 mb-1"></div>
        <div className="rounded-b-md grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-1">
          {data?.map((item, index) => {
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
