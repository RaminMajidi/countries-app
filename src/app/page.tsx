import { baseUrl } from "@/config";


const getAllCountries = async (): Promise<Country[]> => {
  const res = await fetch(`${baseUrl}/all`, { cache: "force-cache" });
  if (!res.ok) throw new Error("Failed to fetch countries");
  const data: Country[] = await res.json();
  return data;
};

export default async function HomePage() {

  const countries = await getAllCountries();
  console.log(countries);

  return (
    <section className="">
    </section>
  );
}
