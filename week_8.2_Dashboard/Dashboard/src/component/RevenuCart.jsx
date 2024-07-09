import React from "react";

function RevenuCart({ title, orderCount, amount }) {
  return (
    <div className="rounded bg-white shadow-md p-4">
      <div className="flex">
        <div>{title}</div>
        <div className="pl-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-between  ">
        <div className="font-bold text-3xl"> ₹ {amount}</div>
        <div>
          {orderCount ? (
            <div className="flex underline decoration-blue-400">
              <div className="text-blue-500">{orderCount} orders</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className=" text-blue-400 size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          ) : null}{" "}
        </div>
      </div>
    </div>
  );
}

export default RevenuCart;
