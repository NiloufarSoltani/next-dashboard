import { Metadata } from "next";
import { lusitana } from "@/app/ui/fonts";
import Table from "@/app/ui/customers/table";
import { fetchFilteredCustomers } from "@/app/lib/data";
import { Suspense } from "react";
// import { customers } from "@/app/lib/placeholder-data";

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
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const customers = await fetchFilteredCustomers(query);
  
  return (
    <div className="w-full">
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        {/* <Search placeholder="Search customers..." /> */}
        <Suspense fallback={<p>loading ...</p>}>
          {/* @ts-expect-error Server Component */}
          <Table customers={customers} />
        </Suspense>
      </div>
    </div>
  );
}
