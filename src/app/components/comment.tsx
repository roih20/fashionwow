import { HeartIcon  } from "@heroicons/react/24/outline";

export default function Comment() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row space-x-3 items-center mb-2.5">
        <p className="text-sm font-semibold hover:underline hover:cursor-pointer">RodWOW03</p>
        <p className="text-gray-700 text-sm">5h ago</p>
      </div>
      <p className="text-sm text-left text-wrap mb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
        veniam. Quam, facilis! Quas quis ipsa, in velit nesciunt nihil error
        amet, molestias ad porro eius quia quo autem pariatur recusandae?Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Facilis, tempore
        optio atque, hic nemo eveniet vero suscipit sapiente at iure minima
        commodi iste, nihil veniam recusandae. Nobis mollitia ea sit.
      </p>
      <div className="flex items-center space-x-2.5">
        <div className="flex items-center space-x-1.5">
          <button className="hover:cursor-pointer p-0 m-0">
            <HeartIcon
              width={18}
              height={18}
              className="hover:text-red-700"
            />
          </button>
          <span className="text-sm">24</span>
        </div>
      </div>
    </div>
  );
}
