import Image from "next/image";
import Link from "next/link";

import { CartComponent } from "./cart";
import { SearchForm } from "./search-form";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link
          href="/"
          title="Home"
          className="text-2xl font-extrabold text-white"
        >
          Devstore
        </Link>
        <SearchForm />
      </div>
      <div className="flex items-center gap-4">
        <CartComponent />
        <div className="h-4 w-px bg-zinc-700" />
        <Link
          href="/account"
          className="flex items-center gap-2 hover:underline"
        >
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/TiagoAraujoDev.png"
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
            alt=""
          />
        </Link>
      </div>
    </header>
  );
};

export { Header };
