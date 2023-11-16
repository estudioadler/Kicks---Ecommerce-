import Image from "next/image";
import { Button } from "../Button/Button";
import Link from "next/link";
import {
  FacebookLogo,
  InstagramLogo,
  TiktokLogo,
  TwitterLogo,
} from "@phosphor-icons/react";

export const Footer = () => {
  return (
    <footer className="bg-RoyalBlue rounded-[48px]">
      <div className="p-10 lg:p-16 rounded-[48px] flex flex-col">
        <div className="lg:flex justify-between items-center">
          <div className="flex flex-col gap-4">
            <h2 className="max-w-lg text-cinza1 text-5xl font-semibold  uppercase">
              Join our KicksPlus Club & get 15% off
            </h2>
            <p className="text-cinza2 text-lg font-semibold">
              Sign up for free! Join the community.
            </p>
            <div className="sm:flex sm:gap-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-80 h-12 px-4 py-2.5 rounded-lg bg-transparent text-cinza1 border border-white justify-start items-center gap-2 inline-flex"
              />
              <Button variant="Cinza4" text="Submit"/>
            </div>
          </div>
          <div className="mt-8">
            <Image
              src="/logoKicksPlus.png"
              alt="Logo plus"
              width={367}
              height={112}
              draggable={false}
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-Cinza4 p-10 lg:p-16 pb-0 lg:pb-0 rounded-[48px] flex flex-col gap-24">
        <div className="justify-between lg:flex">
          <div className="flex flex-col gap-4 mb-8">
            <h3 className="text-Sunshade text-4xl font-semibold">About us</h3>
            <p className="max-w-sm text-cinza2 text-lg font-semibold">
              We are the biggest hyperstore in the universe. We got you all
              cover with our exclusive collections and latest drops.
            </p>
          </div>
          <div className="mb-8">
            <h4 className="text-Sunshade text-2xl font-semibold mb-4">
              Categories
            </h4>
            <ul className="text-lg text-cinza2 flex flex-col gap-2">
              <li>
                <Link href="">Runners</Link>
              </li>
              <li>
                <Link href="">Sneakers</Link>
              </li>
              <li>
                <Link href="">Basketball</Link>
              </li>
              <li>
                <Link href="">Outdoor</Link>
              </li>
              <li>
                <Link href="">Golf</Link>
              </li>
              <li>
                <Link href="">Hiking</Link>
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h4 className="text-Sunshade text-2xl font-semibold mb-4">
              Company
            </h4>
            <ul className="text-lg text-cinza2 flex flex-col gap-2">
              <li>
                <Link href="">About</Link>
              </li>
              <li>
                <Link href="">Contact</Link>
              </li>
              <li>
                <Link href="">Blogs</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-Sunshade text-2xl font-semibold mb-4">
              Follow us
            </h4>
            <ul className="text-lg text-cinza2 flex gap-2">
              <li>
                <Link href="">
                  <FacebookLogo size={20} weight="fill" />
                </Link>
              </li>
              <li>
                <Link href="">
                  <InstagramLogo size={20} weight="fill" />
                </Link>
              </li>
              <li>
                <Link href="">
                  <TwitterLogo size={20} weight="fill" />
                </Link>
              </li>
              <li>
                <Link href="">
                  <TiktokLogo size={20} weight="fill" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Image
            src="/LogoKicks-xlg.png"
            alt="logo"
            width={1262}
            height={313}
            draggable={false}
          />
        </div>
      </div>
    </footer>
  );
};
