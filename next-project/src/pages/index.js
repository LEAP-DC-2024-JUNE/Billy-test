import Logo from "../icons/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center text-yellow-100">
      <Link href={"/about"}>
        <Logo />
      </Link>
    </div>
  );
}
