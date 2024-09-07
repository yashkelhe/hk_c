export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="border-b-2 text-center  bg-yellow-400">
        Hey u will get <span className="text-red-700 font-bold ">20% </span>
        off
      </div>
      {children}
    </div>
  );
}
