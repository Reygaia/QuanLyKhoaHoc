import { NextRequest, NextResponse } from "next/server";
import { supabaseClientApp } from "@/app/libVar/supabase";

export async function POST(request: NextRequest) {
      //check for permission first
      //permission will approve the second table
}

async function CheckPermission(token: string) {}

async function InsertTo2ndTable(project_id: string) {
      const { data, error } = await supabaseClientApp
            .from("project_in_line")
            .insert([
                  {
                        project_id: project_id,
                  },
            ]);
}

async function Approve1ST(project_id: string) {
      const { data, error } = await supabaseClientApp
            .from("project")
            .update({ approval: true })
            .eq("id", project_id);
      if (error) {
            console.error(`Error updating project: ${error.message}`);
      } else {
            console.log("Project updated successfully:", data);
      }
}

async function Approve2ND(project_id: string) {
      const { data, error } = await supabaseClientApp
            .from("project_in_line")
            .update({ approval: true })
            .eq("project_id", project_id);
      if (error) {
            console.error(`Error updating project: ${error.message}`);
      } else {
            console.log("Project updated successfully:", data);
      }
}

async function CheckSecondTable(project_id: string): Promise<boolean> {
      const { data, error } = await supabaseClientApp
            .from("project_in_line")
            .select("*")
            .single();

      if (data) {
            return true;
      }
      if (error) console.error(`Error getting project: ${error.message}`);
      return false;
}
