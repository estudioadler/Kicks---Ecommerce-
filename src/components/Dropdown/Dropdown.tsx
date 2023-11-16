import Link from "next/link";

export const Dropdown = () => {
  // Array de strings para os itens do dropdown
  const dropdownItems = [
    { text: "Runners", link: "/Runners" },
    { text: "Sneakers", link: "/Sneakers" },
    { text: "Basketball", link: "/Basketball" },
    { text: "Outdoor", link: "/Outdoor" },
    { text: "Golf", link: "/Golf" },
    { text: "Hiking", link: "/Hiking" },
  ];

  return (
    <ul className="p-6 bg-cinza1 flex flex-col w-full sm:w-48 gap-4 rounded-3xl border border-Cinza3">
      {/* Utilize o método map para gerar os elementos dinamicamente */}
      {dropdownItems.map((item, index) => (
        <li key={index}>
          <Link href={item.link}>{item.text}</Link>
        </li>
      ))}
    </ul>
  );
};
