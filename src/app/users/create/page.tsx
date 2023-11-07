import { sql } from "@vercel/postgres";
import React from "react";

const CreateCustomer = () => {
  return (
    <main className="grid gap-y-6 h-screen grid-rows-[auto_1fr] px-6 py-8">
      <h1>Create user</h1>
      <section className="w-full grid place-content-center">
        <form
          action={async (values) => {
            "use server";
            const name = values.get("name");
            const email = values.get("email");
            if (name && email) {
              const result =
                await sql`INSERT INTO CUSTOMER(name, email) VALUES (${
                  name as string
                }, ${email as string}) `;
            }
          }}
          className="grid gap-y-8 max-w-2xl"
        >
          <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-4">
            <label className="grid grid-cols-[subgrid] col-[1/-1]">
              <span>Name</span>
              <input type="text" name="name" className="text-black" />
            </label>
            <label className="grid grid-cols-[subgrid] col-[1/-1]">
              <span>Email</span>
              <input type="email" name="email" className="text-black" />
            </label>
          </div>
          <button className="col-[1/-1]">Submit</button>
        </form>
      </section>
    </main>
  );
};

export default CreateCustomer;
