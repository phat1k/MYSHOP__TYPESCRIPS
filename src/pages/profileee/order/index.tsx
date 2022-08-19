import React from "react";
import { Link } from "react-router-dom";

export default function Order() {
  const listOrder:Array<{id:number, title: string}> = [
    {
      id: 1,
  title: "order1",
    },
    {
      id: 2,
  title: "order2",
    },
    {
      id: 3,
  title: "order3",
    },
    {
      id: 4,
  title: "order4",
    },
    {
      id: 5,
  title: "order5",
    },
  ];
  return (
    <div>
      Orderrrrr
      {listOrder.map((e) => (
        <div key={e.id}>
          <Link to={`${e.id}`}>{e.title}</Link>
        </div>
      ))}
    </div>
  );
}
