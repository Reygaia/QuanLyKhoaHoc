import {supabaseClient} from '@/app/libVar/supabase';
import {NextResponse} from "next/server";

async function readTable(){
    const { data, error } = await supabaseClient.auth.admin.listUsers();

    if (error) {
        throw new Error(`Error fetching users: ${error.message}`);
    }

    return data; // return the fetched data
}

// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
export async function GET(req:Request, res:Response){
    try {
        const users = await readTable();
        return NextResponse.json(users); // Use appropriate response type for your framework
    } catch (error: unknown) {
        // Type assertion to get the error message correctly
        const errorMessage = (error as Error).message || 'Unknown error occurred';
        console.error('Error in GET:', errorMessage);
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}