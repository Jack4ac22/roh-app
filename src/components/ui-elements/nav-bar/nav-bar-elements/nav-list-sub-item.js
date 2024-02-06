import Link from "next/link";
export default function NavListItem(props) {
  const subItem = props.subItem;

  return (
    <>
      <ul>
        <li>
          <Link href={"/"}>sub-link1</Link>
        </li>
        <li>
          <Link href={"/"}>sub-link2</Link>
        </li>
        <li>
          <Link href={"/"}>sub-link3</Link>
        </li>
      </ul>
    </>
  );
}
