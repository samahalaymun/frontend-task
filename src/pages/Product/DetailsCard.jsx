import React from 'react'

function DetailsCard({label,value}) {
  return (
    <div className="flex gap-2">
      <span className="md:text-base text-sm font-semibold">{label}:</span>
      <span className="text-gray-400 md:text-base text-sm">{value}</span>
    </div>
  );
}

export default DetailsCard
