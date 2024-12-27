import { supabaseClientApp } from "@/app/libVar/supabase";
import { NextRequest, NextResponse } from "next/server";

const Client = supabaseClientApp;

const bucket_name = "project_files";

export const config = {
      api: {
            bodyParser: false,
      },
};

// Function to upload a file to a Supabase storage bucket
export async function POST(request: NextRequest) {
      const formData = await request.formData();
      const file = formData.get("file") as File;

      if (!file) {
            return NextResponse.json(
                  { error: "No file uploaded" },
                  { status: 400 }
            );
      }

      const { data, error } = await Client.storage
            .from(bucket_name) // Replace with your bucket name
            .upload(`uploads/${file.name}`, file);

      const fileUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${data?.path}`;
      const fileType = file.type;

      // Save to the PROJECT_FILES table
      const { error: dbError } = await Client.from("project_files").insert([
            {
                  project_code: "cd783ea8-0b67-4ad1-bd37-a93152ba3231", // Replace with actual project code
                  file_name: file.name,
                  file_url: fileUrl,
                  file_type: fileType,
                  user_id: "94f4052f-b44a-4959-8ad2-b2a0219164cf", // Replace with actual user ID
            },
      ]);

      if (dbError) {
            return NextResponse.json(
                  { error: dbError.message },
                  { status: 500 }
            );
      }

      return NextResponse.json(
            { message: "File uploaded successfully", fileUrl, fileType },
            { status: 200 }
      );
}
