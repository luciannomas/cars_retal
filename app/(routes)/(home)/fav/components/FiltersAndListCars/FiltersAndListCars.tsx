"use client";
import { Bobecars as Car } from "@prisma/client"; // Asegúrate de que el modelo Bobecars esté correctamente importado
import { useEffect, useState } from "react";
import { FiltersAndListCarsProps } from "./FiltersAndListCars.types";
import { ListCars } from "../ListCars";
import { FilterCars } from "../FiltersCars";
import { ListLovedCars } from "../ListLovedCars";

export function FiltersAndListCars(props: FiltersAndListCarsProps) {
  const { cars } = props;
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [filters, setFilters] = useState({
    type: "",
    transmission: "",
    engine: "",
  });

  useEffect(() => {
    let filtered = cars;

    if (filters.type) {
      filtered = filtered.filter((car) =>
        car.type.toLowerCase().includes(filters.type.toLowerCase())
      );
    }
    if (filters.transmission) {
      filtered = filtered.filter((car) =>
        car.transmission
          .toLowerCase()
          .includes(filters.transmission.toLowerCase())
      );
    }
    if (filters.engine) {
      filtered = filtered.filter((car) =>
        car.engine.toLowerCase().includes(filters.engine.toLowerCase())
      );
    }
    setFilteredCars(filtered);
  }, [filters, cars]);

  const handleFilterChange = (filterName: string, filterValue: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
  };

  const clearFilters = () => {
    setFilters({
      type: "",
      transmission: "",
      engine: "",
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Favoritos</h2>
      {/* <FilterCars
        setFilters={handleFilterChange}
        filters={filters}
        clearFilters={clearFilters}
      /> */}
      {/* <ListCars cars={filteredCars} /> */}
      <ListLovedCars />

    </div>
  );
}