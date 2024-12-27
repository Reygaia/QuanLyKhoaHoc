import { supabaseClientApp } from "@/app/libVar/supabase";
import { NextRequest, NextResponse } from "next/server";
import { getSub, ExampleUser } from "../token/route";

const Client = supabaseClientApp;

///post request

export async function POST(request: NextRequest) {
      try {
            const { data, error } = await supabaseClientApp.auth.getSession();
            //for actual app usage
            const sessionToken = data.session?.access_token;
            const sessionId = data.session?.user.id;
            if (error) {
                  return NextResponse.json(
                        { message: "Failed to get session." },
                        { status: 500 }
                  );
            }
            if (!sessionToken) {
                  //for postman test
                  const token: string | null = await ExampleUser(
                        "abcd@gmail.com",
                        "1234"
                  );
                  const sessionId = await getSub(token as string);

                  ///////////////////////////////////////////////
            }

            // Parse the JSON body of the request
            const body = await request.json();
            const { projectName, teacher_id } = body;

            // Validate the incoming data
            if (!projectName || !teacher_id) {
                  return NextResponse.json(
                        { message: "Missing Information." },
                        { status: 400 }
                  );
            }

            // Call the CreateProject function
            const result = await CreateProject(projectName);

            // Check for errors from Supabase
            if (result.error) {
                  console.error("Supabase error:", result.error);
                  return NextResponse.json(
                        { message: "Failed to create project." },
                        { status: 500 }
                  );
            }

            const projectId =
                  result.data && result.data[0]
                        ? result.data[0].id
                        : "defaultId";

            // Retrieve the project UUID
            if (projectId) {
                  // Insert into another table using the UUID
                  await AddSinhvienInfo(
                        projectId,
                        sessionToken as string,
                        teacher_id
                  );
            }
            // Return success response
            return NextResponse.json(
                  {
                        message: "Project created successfully",
                        data: result.data,
                        userid: sessionId,
                  },
                  { status: 201 }
            );
      } catch (error) {
            console.error("Unexpected error:", error);
            return NextResponse.json(
                  { message: "Internal server error" },
                  { status: 500 }
            );
      }
}

async function CreateProject(projectName: string) {
      const { data, error } = await Client.from("project")
            .insert([
                  {
                        date_start: new Date(),
                        date_end: addDate(72, new Date()),
                        name: projectName,
                        level_id: "CS_0",
                        major: "SE", // Replace with actual level ID logic if needed
                  },
            ])
            .select();

      return { data, error };
}

function addDate(days: number, dateStart: Date): Date {
      const resultDate = new Date(dateStart); // Create a copy of the input date
      resultDate.setDate(resultDate.getDate() + days); // Add the specified number of days
      return resultDate; // Return the updated date
}

async function AddSinhvienInfo(
      projectId: string,
      token: string,
      teacherId: string
) {
      // Use the provided token to get the user ID (sub)
      const id = await getSub(token);
      const { data, error } = await Client.from("project_member")
            .insert([
                  {
                        project_id: projectId,
                        member_id: id,
                        teacher_id: teacherId,
                  },
            ])
            .select();

      return { data, error };
}

///post request

//Get request

export async function GET(request: NextRequest) {
      const { data, error } = await Client.from("project").select("*");
      if (data) {
            return NextResponse.json({ data });
      }
      return NextResponse.json({
            status: 500,
            error: error,
      });
}
// Extract the token from the Authorization header
// const token = await getTokenFromAuthorizationHeader(request);
// if (!token) {
//       return NextResponse.json(
//             {
//                   message: "Token is missing in the Authorization header.",
//             },
//             { status: 400 }
//       );
// }
