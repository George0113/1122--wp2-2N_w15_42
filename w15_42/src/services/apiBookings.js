// import supabase from './supabase';

import supabase, { supabaseUrl } from './supabase';

export const getBooking = async (id) => {
  const { data, error } = await supabase
    .from('bookings_42')
    .select('*, cabins_42(*), guests_42(*)')
    .eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Bookings could not be loaded');
  }
  return data;
};
