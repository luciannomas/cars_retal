import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { ListCars } from "./components/ListCars";
import { FiltersAndListCars } from "../../(home)/cars/components/FiltersAndListCars";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  const cars = await db.bobecars.findMany({
    where: {
      isPublish: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <div className="flex justify-between">
      {/*   <h2 className="text-2xl font-bold">List of cars</h2> */}
      </div>
      {/* <ListCars cars={cars} /> */} {/* old lista de autos a reservar sin paginacion ni filtro */}
      <FiltersAndListCars cars={cars} /> {/* Con filtro pero sin paginacion */}
    </div>
  );
}
