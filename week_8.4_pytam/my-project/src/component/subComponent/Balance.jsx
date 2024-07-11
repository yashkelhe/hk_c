export const Balance = ({ value }) => {
  // Handle the case where value is null or undefined
  if (value === null || value === undefined) {
    return <div className="flex">Loading...</div>;
  }

  // Ensure value is a valid number or convert it to a string
  const displayValue = typeof value === "number" ? value.toFixed(2) : value;

  return (
    <div className="flex">
      <div className="font-bold text-lg">Your balance</div>
      <div className="font-semibold ml-4 text-lg">Rs {displayValue}</div>
    </div>
  );
};
