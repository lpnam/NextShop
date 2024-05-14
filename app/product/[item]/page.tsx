import { GetDetailData } from "@/store/data_list";
import ItemDetail from "@/ui/ItemDetail";

export default async function Page({ params }: { params: { item: string } }) {
  const { item } = params;
  const data = await GetDetailData(item);

  return (
    <main>
      <ItemDetail
        name={data.item_name}
        price={data.item_price}
        image={data.item_image}
        date={data.date_in}
        code_name={data.code_name}
        key={0}
      />
    </main>
  );
}
