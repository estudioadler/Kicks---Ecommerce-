import {
  Fire,
  CaretDown,
  MagnifyingGlass,
  User,
  ShoppingCartSimple,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { Dropdown } from "../Dropdown/Dropdown";
import { useState } from "react";
export const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="flex justify-between rounded-3xl bg-cinza1 w-full p-8 shadow-sm">
      <Link href="/" className="w-20 sm:w-32">
        <Image alt="Logotipo" src="/logoKicks.svg" width={128} height={32} />
      </Link>

      <div className="hidden items-center gap-8 md:flex">
        <Link href="/" className="flex gap-1 items-center flex-shrink-0 mb-0">
          New Drops
          <Fire size={16} weight="fill" color="#ffa52f" />
        </Link>
        <Link
          onClick={() => setOpen((prev) => !prev)}
          href="/"
          className="relative flex gap-1 items-center flex-shrink-0 mb-0"
        >
          Categories
          <CaretDown size={16} weight="light" />
          {isOpen && (
             <div className="absolute top-10">
               <Dropdown />
             </div>
          )
          }
        </Link>
      </div>

      <div className="flex items-center gap-8">
        <Link href="/" className="hidden md:flex">
          <MagnifyingGlass size={20} weight="light" />
        </Link>

        <Link href="/">
          <User size={20} weight="light" />
        </Link>

        <Link href="/" className="relative">
          <ShoppingCartSimple size={20} weight="light" />
          <div className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-Sunshade"></div>
        </Link>
      </div>
    </header>
  );
};
