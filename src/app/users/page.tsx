import EmptyState from "@/app/users/EmptyState";
import { sql } from "@vercel/postgres";
import Link from "next/link";
import React, { Suspense } from "react";

const Loading = () => (
  <div className="w-full aspect-video rounded-full border-2 border-white animate-spin"></div>
);

const TableContext = React.createContext<{
  data: any;
  head: boolean;
  args: any;
}>({ data: null });

const useTable = () => React.useContext(TableContext);
const Table = <T extends Array<any>>({
  data,
  children,
}: {
  data: T;
  children: React.ReactNode;
}) => {
  const Columns = ({ head = false }: { head?: boolean }) =>
    data.map((...args) => (
      <TableContext.Provider value={{ head, data, args }} key={args[0]}>
        <tr>
          {React.Children.map(children, (child) => (
            <td>{child}</td>
          ))}
        </tr>
      </TableContext.Provider>
    ));
  return (
    <table>
      <thead>
        <Columns head />
      </thead>
      <tbody>
        <Columns />
      </tbody>
    </table>
  );
};

const Customers = async () => {
  const data = await sql`SELECT * FROM CUSTOMER`;
  return (
    <section className="max-w-screen-md w-full justify-self-center">
      <Suspense fallback={<Loading />}>
        {data.rows.length ? (
          <table className="grid-cols-[auto_1fr] gap-x-4">
            <thead className="">
              <tr className="">
                <td>Name</td>
                <td>Email</td>
              </tr>
            </thead>
            <tbody className="">
              {data.rows.map((item) => (
                <tr key={item.id} className="">
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <EmptyState />
        )}
      </Suspense>
    </section>
  );
};

export default function Home() {
  return (
    <main className="grid min-h-screen px-6 py-8">
      <div className="grid gap-y-6 content-start justify-self-center max-w-screen-lg w-full">
        <div className="grid justify-between grid-flow-col align-baseline">
          <h1>Users</h1>
          <Link href="/users/create" className="text-3xl">
            +
          </Link>
        </div>
        <Customers />
      </div>
    </main>
  );
}
