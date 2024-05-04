import { createClient } from "@/utils/supabase/server";
import ItemCard from "@/ui/ItemCard";
export default async function Page() {
  const supabase = createClient();
  const { data } = await supabase.from("item").select();
  // if (data) console.log(data[0].item_name);
  return (
    <main>
      <div className="body-container bg-slate-300 h-auto px-1">
        <div className="h-[125px] rounded-t-md border border-red-500 mb-1"></div>
        <div className="border border-black rounded-b-md grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-1">
          <ItemCard
            name={data ? data[0].item_name : "None"}
            price={data ? data[0].item_price : "None"}
            image={data ? data[0].item_image : []}
            date={data ? data[0].date_in : ""}
            code_name={data ? data[0].code_name : ""}
          />
          <div className="item-card">Hello</div>
          {/* <div className="item-card ">Hello</div>
          <div className="item-card ">Hello</div>
          <div className="item-card ">Hello</div>
          <div className="item-card ">Hello</div>
          <div className="item-card ">Hello</div>
          <div className="item-card ">Hello</div>
          <div className="item-card ">Hello</div>
          <div className="item-card ">Hello</div>
          <div className="item-card ">Hello</div>
          <div className="item-card ">Hello</div>
          <div className="item-card ">Hello</div>
          <div className="item-card ">Hello</div>
          <div className="item-card ">Hello</div>
          <div className="item-card ">Hello</div>
          <div className="item-card ">Hello</div>
          <div className="item-card ">Hello</div>
          <div className="item-card ">Hello</div>
          <div className="item-card ">Hello</div>
          <div className="item-card ">Hello</div>
          <div className="item-card ">Hello</div>
          <div className="item-card ">Hello</div>
          <div className="item-card ">Hello</div>
          <div className="item-card ">Hello</div>
          <div className="item-card ">Hello</div>
          <div className="item-card ">Hello</div>
          <div className="item-card ">Hello</div>
          <div className="item-card ">Hello</div>
          <div className="item-card ">Hello</div>
          <div className="item-card ">Hello</div> */}
        </div>
      </div>
    </main>
  );
}
