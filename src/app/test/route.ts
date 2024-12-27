import { Client } from "@/app/libVar/supabase";
import { NextResponse } from "next/server";

async function readTable() {
      const { data, error } = await Client.auth.admin.listUsers();

      if (error) {
            throw new Error(`Error fetching users: ${error.message}`);
      }

      return data; // return the fetched data
}

// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars

export async function GET(req: Request) {
      try {
            const users = await readTable();
            return NextResponse.json(users); // Respond with the JSON of users
      } catch (error: unknown) {
            const errorMessage =
                  (error as Error).message || "Unknown error occurred";
            console.error("Error in GET:", errorMessage);
            return NextResponse.json({ error: errorMessage }, { status: 500 });
      }
}
