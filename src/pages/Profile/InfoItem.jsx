import React from 'react'

function InfoItem({ label, value }) {
  return (
    <div>
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="text-base text-gray-800">{value || "—"}</p>
    </div>
  );
}

export default InfoItem
