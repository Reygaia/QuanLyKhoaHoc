import { NextRequest, NextResponse } from "next/server";
import { supabaseClientApp } from "app/libVar/supabase";
import { getRole } from "../token/authutil";

export async function POST(request: NextRequest) {
      //check for permission first
      //permission will approve the second table

      const body = await request.json();
      const { project_id, approve } = body;

      if ((await CheckPermission()) == "QL") {
            if (await CheckSecondTable(project_id)) {
                  await Approve2ND(project_id, approve);
            }
      } else if ((await CheckPermission()) == "GV") {
            await Approve1ST(project_id, approve);
            await InsertTo2ndTable(project_id);
      }
}

async function CheckPermission(): Promise<string> {
      const { data, error } = await supabaseClientApp.auth.getSession();
      const token = data.session?.access_token;
      const role = await getRole(token as string);
      if (!role) {
            return "Error";
      }
      return role;
}

async function InsertTo2ndTable(project_id: string) {
      const { data, error } = await supabaseClientApp
            .from("project_in_line")
            .insert([
                  {
                        project_id: project_id,
                  },
            ]);
      if (error) {
            console.error(`Error updating project: ${error.message}`);
      }
      return data;
}

async function Approve1ST(project_id: string, approve: boolean) {
      const { data, error } = await supabaseClientApp
            .from("project")
            .update({ approval: approve })
            .eq("id", project_id);
      if (error) {
            console.error(`Error updating project: ${error.message}`);
      } else {
            console.log("Project updated successfully:", data);
      }
      if (error) {
            console.error(`Error updating project: ${error.message}`);
      }
      return data;
}

async function Approve2ND(project_id: string, approve: boolean) {
      const { data, error } = await supabaseClientApp
            .from("project_in_line")
            .update({ approval: approve })
            .eq("project_id", project_id);
      if (error) {
            console.error(`Error updating project: ${error.message}`);
      } else {
            console.log("Project updated successfully:", data);
      }
      if (error) {
            console.error(`Error updating project: ${error.message}`);
      }
      return data;
}

async function CheckSecondTable(project_id: string): Promise<boolean> {
      const { data, error } = await supabaseClientApp
            .from("project_in_line")
            .select("*")
            .eq("project_id", project_id);
      if (data) {
            return true;
      }
      if (error) console.error(`Error getting project: ${error.message}`);
      return false;
}
