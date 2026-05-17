import { supabase } from "../lib/supabase";

export async function getGames() {
  const { data, error } = await supabase
    .from("games")
    .select("*");

  if (error) {
    console.error(error);
    throw error;
  }

  return data;
}

export async function addGame(name: string) {
  const { data, error } = await supabase
    .from("games")
    .insert([{ name }]);

  if (error) throw error;

  return data;
}
