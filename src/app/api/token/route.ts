import {supabaseClient} from "@/app/libVar/supabase";
import jwt from 'jsonwebtoken';
import {NextRequest, NextResponse} from 'next/server';


const JWT_SECRET = process.env.SUPABASE_JWT_SECRET as string;

export async function GET(request: NextRequest) {
    try {
        // Parse query parameters
        const {searchParams} = new URL(request.url);
        const email = searchParams.get('email');
        const password = searchParams.get('password');

        if (!email || !password) {
            return NextResponse.json({error: 'Missing email or password'}, {status: 400});
        }

        // Authenticate user and get JWT token
        const token = await loginUser(email, password);

        if (!token) {
            return NextResponse.json({error: 'Authentication failed'}, {status: 401});
        }

        // Return the token in the response
        return NextResponse.json({token}, {status: 200});
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
    }
}


async function loginUser(email: string, password: string) {
    const {data, error} = await supabaseClient
        .auth
        .signInWithPassword({
                                email,
                                password,
                            });

    if (error) {
        console.error('Login error: ', error.message);
        return null;
    }

    if (data.session) {
        const sub = await getSub(data.session.access_token);  // Await the getSub function

        if (sub) {
            // Get the role only once and store it
            const role = await getRole(sub);  // Await the role retrieval

            if (role) {
                console.log('Role data:', role);

                // Now safely create the new claim using the role
                const newClaim = {
                    CustomRole: role,  // Use the role directly
                };
                //console.log('JWT Token: ', data.session.access_token);
                return addCustomPropertyToToken(data.session.access_token, newClaim, JWT_SECRET);
            } else {
                console.error('No role found for user.');
            }
        } else {
            console.error('Sub claim is missing or invalid.');
        }
    }

    console.error('No session data returned');
    return null;
}

async function getRole(userId: string) {
    const {data, error} = await supabaseClient.from("user_roles")
                                              .select("role_id")
                                              .eq("user_id", userId)
                                              .single();
    if (error) {
        console.error(`Error getting role: ${error.message}`);
        return null;  // Return null or handle the error as needed
    }
    if (data) {
        //console.log('Role data: ', data);
        return data.role_id;  // Return the single role data
    }
    console.log('No role found for user');
    return null;  // Return null if no data is found
}

async function getSub(token: string): Promise<string | null> {
    try {
        // Decode the token without verifying its signature (for extracting payload)
        const decodedToken = jwt.decode(token);

        // Check if the decoded token is an object and contains the `sub` claim
        if (decodedToken && typeof decodedToken === 'object' && 'sub' in decodedToken) {
            return (decodedToken as { sub: string }).sub;  // Return the `sub` claim
        } else {
            console.error('Token does not contain a valid sub claim or is not in the expected format.');
            return null;
        }
    } catch (error) {
        console.error('Error decoding token:', error);
        return null;
    }
}


async function addCustomPropertyToToken(existingToken: string, customClaims: Record<string, any>, secretKey: string) {
    try {
        // Decode the existing token (without verifying it for now)
        const decoded = jwt.decode(existingToken) as jwt.JwtPayload | null;

        if (!decoded) {
            console.error('Failed to decode the token');
            return null;
        }

        // Add your custom properties to the decoded token
        const newClaims = {
            ...decoded,
            ...customClaims, // Add custom claims here (like role, permissions, etc.)
        };

        // Generate a new JWT with the custom claims
        const newToken = jwt.sign(newClaims, secretKey, {});

        console.log('New JWT with custom properties:', newToken);
        return newToken;
    } catch (error) {
        console.error('Error adding custom properties to token:', error);
        return null;
    }
}


