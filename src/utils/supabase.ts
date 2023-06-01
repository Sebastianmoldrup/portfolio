import { createClient } from '@supabase/supabase-js';

export async function getPage(slug: string) {
  if (
    !import.meta.env.SUPABASE_URL ||
    !import.meta.env.SUPABASE_NAME ||
    !import.meta.env.SUPABASE_TABLE
  )
    return { error: 'no database', error_code: 500 };

  const supabase = createClient(
    import.meta.env.SUPABASE_URL as string,
    import.meta.env.SUPABASE_PUBLIC_KEY as string
  );
  const { data, error } = await supabase
    .from(import.meta.env.SUPABASE_TABLE)
    .select('title, description, author, settings, content_json')
    .eq('website', import.meta.env.SUPABASE_NAME)
    .eq('private', false)
    .eq('slug', slug);

  if (error) return { error: 'error fetching data', error_code: 503 };
  // console.log(data);
  const page = data.at(0) ?? { error: 'no page found', error_code: 404 };

  for (let p of page.content_json) {
    if (p.type === 'shortcode' && p.data === 'list')
      p.listdata = await getList(p.attributes);
    // if (p.type === 'shortcode' && p.data === 'ls')
    //   p.listdata = await getLs(p.attributes);
  }

  // page.forEach(async (item: any) => {
  //   if (item.type === 'shortcode' && item.data === 'ls')
  //     item.listdata = await getList(item.attributes);
  // });

  // console.log(page);
  return page;
}

async function getList(name: string) {
  const supabase = createClient(
    import.meta.env.SUPABASE_URL as string,
    import.meta.env.SUPABASE_PUBLIC_KEY as string
  );
  const { data, error } = await supabase
    .from('lists')
    .select('name, data')
    .textSearch('category', name);

  // console.log('gu', name, data, error);
  return data;
}
export async function getLs(name: string) {
  const supabase = createClient(
    import.meta.env.SUPABASE_URL as string,
    import.meta.env.SUPABASE_PUBLIC_KEY as string
  );
  const { data, error } = await supabase
    .from('lists')
    .select('name, data->>url')
    .eq('name', name);

  console.log('gu', name, data, error);
  return data;
}
