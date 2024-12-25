import { supabaseClient } from "@/app/libVar/supabase";
import { NextRequest, NextResponse } from "next/server";

const Client = supabaseClient;

export async function POST(request: NextRequest) {
      try {
            // Parse the JSON body of the request
            const body = await request.json();

            const { projectName /*, institute, major, nameSV, svId*/ } = body;

            // Validate the incoming data
            if (!projectName /*|| !institute || !major || !nameSV || !svId*/) {
                  return NextResponse.json(
                        { message: "All fields are required." },
                        { status: 400 }
                  );
            }

            // Call the CreateProject function
            await CreateProject(projectName /*institute, major, nameSV, svId*/);

            // Return success response
            return NextResponse.json(
                  { message: "Project created successfully" },
                  { status: 201 }
            );
      } catch (error) {
            console.error(error);
            return NextResponse.json(
                  { message: "Internal server error" },
                  { status: 500 }
            );
      }
}

async function CreateProject(
      prjectName: string
      //institute: string,
      //major: string,
      //nameSV: string,
      //svId: string
) {
      const { data, error } = await Client.from("project").insert({
            id: "uuid_generate_v4()",
            date_start: new Date(),
            date_end: addDate(72, new Date()),
            name: prjectName,
            //add in these property later
            // institute: institute,
            // major: major,
            // student_name: nameSV, belong to another table
            // student_id: svId, belong to another table
            level_id: "MON_0",
            approval: false,
      });
}

async function addDate(dates: number, date_start: Date): Promise<Date> {
      const resultDate = new Date(date_start); // Create a copy of the input date
      resultDate.setDate(resultDate.getDate() + dates); // Add the specified number of days
      return resultDate; // Return the updated date
}
