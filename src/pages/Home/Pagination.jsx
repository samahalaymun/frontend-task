import { Button } from "@/components/ui/button";
import { useProductStore } from "@/store/productStore";
import React from "react";

function Pagination({data}) {
  const { setFilters, filters } = useProductStore((state) => state);
  const totalPages = Math.ceil(data?.total / filters.limit);

  return (
    <div className="flex gap-4 my-4 items-center">
      <Button
        disabled={filters.page === 1}
        onClick={() => setFilters({ page: filters.page - 1 })}
        variant=""
      >
        {"<<"}
      </Button>

      <span>
        Page {filters.page} of {totalPages}
      </span>

      <Button
        disabled={filters.page === totalPages}
        onClick={() => setFilters({ page: filters.page + 1 })}
      >
        {">>"}
      </Button>
    </div>
  );
}

export default Pagination;
