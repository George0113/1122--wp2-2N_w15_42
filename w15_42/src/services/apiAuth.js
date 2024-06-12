import supabase,{supabaseUrl} from "./supabase";

export const login = async ({email, password}) => {
    let {data, error} = await supabase.auth.signInWithPassword({
        email,
        password,
    });
    if(error) throw new Error(error.message);

    console.log('login() data',data);
    return data;
};