/*
import {db} from "@vercel/postgres";
import bcrypt from "bcrypt";
import {Client} from 'pg';
import {Pool} from 'pg';
*/
import {createClient} from '@supabase/supabase-js';
import {NextResponse} from 'next/server';



const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey || !supabaseKey) {
    throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, serviceRoleKey);

async function createTables() {
    const sql = `
        CREATE TABLE IF NOT EXISTS USERS(
        ID UUID DEFAULT UUID_GENERATE_V4() PRIMARY KEY,
        USER_CODE VARCHAR(255) NOT NULL,
        USER_NAME VARCHAR(255) NOT NULL,
        EMAIL TEXT NOT NULL UNIQUE,
        PHONE VARCHAR(20) NOT NULL UNIQUE,
        PASSWORD TEXT NOT NULL
        );
        
        //bảng khoa-viện
        
        CREATE TABLE IF NOT EXISTS INSTITUTE(
        ID UUID DEFAULT UUID_GENERATE_V4() PRIMARY KEY,
        NAME VARCHAR(255) NOT NULL UNIQUE
        );
        
        //bảng role
        
        CREATE TABLE IF NOT EXISTS ROLES (
        ID UUID DEFAULT UUID_GENERATE_V4() PRIMARY KEY,
        ROLE_NAME VARCHAR(50) UNIQUE NOT NULL
        );
        
        //bảng đồ án
        
        CREATE TABLE IF NOT EXISTS PROJECTS (
        UID UUID DEFAULT UUID_GENERATE_V4() PRIMARY KEY,
        DATE_START DATE NOT NULL,
        DATE_END DATE NOT NULL,
        GROUP_ID UUID REFERENCES GROUP(ID) ON DELETE DO NOTHING,  -- FOREIGN KEY TO \`GROUP\` WITH NO CASCADE DELETE
        NAME VARCHAR(255) NOT NULL
        );
        
        //bảng user role
        
        CREATE TABLE IF NOT EXISTS USER_ROLES (
        USER_ID UUID NOT NULL REFERENCES AUTH.USERS(ID),
        ROLE_ID UUID NOT NULL REFERENCES ROLES(ID),
        PRIMARY KEY (USER_ID, ROLE_ID)
        );
        
        //bảng nhóm
        
        CREATE TABLE IF NOT EXISTS GROUP (
        ID UUID DEFAULT UUID_GENERATE_V4() PRIMARY KEY,
        SUBJECT_CODE VARCHAR(255) NOT NULL REFERENCES SUBJECT(ID),  // CHANGED TO STRING TYPE
        DATE_START DATE NOT NULL,                                   // START DATE
        DATE_END DATE NOT NULL,                                     // END DATE
        SUPERVISOR_CODE UUID NOT NULL REFERENCES AUTH.USERS(ID) ON DELETE DO NOTHING     // FOREIGN KEY REFERENCING \`AUTH.USERS\` TABLE'S \`ID\` COLUMN
        );

    `;
    const {data, error} = await supabase.rpc('execute_sql', {sql});

    if (error) {
        console.error('Error creating tables:', error.message);
        return NextResponse.json({error: 'Error creating tables: ' + error.message}, {status: 500});
    }

    console.log('Tables created successfully:', data);
    return NextResponse.json({message: 'Tables created successfully', data});
}

async function insertSampleData() {
    const roles = [
        { name: 'admin' },
        { name: 'institute-leader' },
        { name: 'sub-institute-leader' },
        { name: 'institute-manager' },
        { name: 'sub-institute-manager' },
        { name: 'teacher' },
        { name: 'student' },
    ];

    // Loop through each role and insert it into the roles table
    for (const role of roles) {
        const { data, error } = await supabase
            .from('ROLES')
            .insert(role);

        if (error) {
            console.error(`Error inserting role ${role.name}:`, error.message);
            return NextResponse.json({ error: `Error inserting role ${role.name}: ` + error.message }, { status: 500 });
        }

        console.log(`Role ${role.name} inserted successfully:`, data);
    }

    return NextResponse.json({ message: 'Sample roles inserted successfully' });
}



export async function GET(req: Request) {
    try {
        const tables = await createTables();
        const samples = await insertSampleData();
        const result = `${tables} | ${samples}`;
        console.log(req);

        // Wrap `result` in NextResponse.json() to ensure a Response type is returned
        return NextResponse.json({ result, message: 'Success' });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
    }
}


/*
const client = await db.connect();
*/

/*




async function seedTables() {
    await supabase.`CREATE EXTENSION IF NOT EXISTS "uuid-ossp`;
    await supabase.sql`
    
    create table if not exists users(
        id UUID default uuid_generate_v4() primary key,
        user-code varchar(255) not null,
        user-name varchar(255) not null,
        email text not null unique,
        phone varchar(20) not null unique,
        password text not null,
        );
    `;

    /!*const insertedUsers = await Promise.all(
        users

    )
*!/
}

async function seedProjects() {
    await client.sql`create extension if not exists "uuid-ossp`;
    await client.sql`
    
    create table if not exists projects(


        );
    `;
}

async function seedRoles() {
    await client.sql`create extension if not exists "uuid-ossp"`;
    await client.sql`
    CREATE TABLE IF NOT EXISTS roles (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL UNIQUE
    );
  `;

    // Insert roles
    const roles = [
        {name: 'admin'},
        {name: 'institute-leader'},
        {name: 'sub-institute-leader'},
        {name: 'institute-manager'},
        {name: 'sub-institute-manager'},
        {name: 'teacher'},
        {name: 'student'},
    ];
    await Promise.all(
        roles.map(async (role) => {
            return client.sql`
        INSERT INTO roles (name)
        VALUES (${role.name})
        ON CONFLICT (name) DO NOTHING;
      `;
        })
    );
}

async function seedUserRoles() {
    await client.sql`create extension if not exists "uuid-ossp"`;

    await client.sql`
    CREATE TABLE IF NOT EXISTS user-roles (
       user_id UUID NOT NULL,
        role_id UUID NOT NULL,
        PRIMARY KEY (user_id, role_id),
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE
    );
  `;

}

async function seedGroup() {
    await client.sql`create extension if not exists "uuid-ossp"`;
    await client.sql`
    
    create table if not exists group(){
        
        id UUID default uuid_generate_v4() primary key,

        
        }
    `;
}

async function seedInstitute() {
    await client.sql`create extension if not exists "uuid-ossp"`;
    await client.sql`
    
    create table if not exists Institute(
        
        id UUID default uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE
        
        );
    `;
}

async function seed*/
