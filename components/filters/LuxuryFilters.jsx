"use client";

export function LuxuryFilters({ filters, values, onChange }) {
  return (
    <div className="luxury-filter-system">
      {filters.map((filter) => (
        <label key={filter.name}>
          <span>{filter.label}</span>
          <select value={values[filter.name] || ""} onChange={(event) => onChange(filter.name, event.target.value)}>
            <option value="">Any</option>
            {filter.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      ))}
    </div>
  );
}
