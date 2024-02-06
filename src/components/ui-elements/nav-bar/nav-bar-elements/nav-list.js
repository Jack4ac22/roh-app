import Link from "next/link";
export default function NavList(props) {
  return (
    <div className="">
      <ul>
        <li>
          <Link href={"/"}>link1</Link>
        </li>

        <li>
          <Link href={"/"}>link3</Link>
        </li>
      </ul>
    </div>
  );
}
