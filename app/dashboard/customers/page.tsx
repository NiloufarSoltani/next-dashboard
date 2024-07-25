import { Metadata } from "next";
import Table from "@/app/ui/customers/table";
import { fetchFilteredCustomers } from "@/app/lib/data";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Customers",
};

export default async function Customers({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    query?: string;
  };
}) {
  // const [customers, setCustomers] = useState<FormattedCustomersTable[] | null>(null)
  const query = searchParams?.query || "";
  // useEffect(()=>{
  //   async function fetchdata() {
  //     const customers = await fetchFilteredCustomers(query)
  //     setCustomers(customers)
  //   }
  //   fetchdata()
  // },[])
  const customers = await fetchFilteredCustomers(query);

  return (
    <div className="w-full">
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Suspense fallback={<p>loading ...</p>}>
          {/* @ts-expect-error Server Component */}
          <Table customers={customers} />
        </Suspense>
      </div>
    </div>
  );
}
