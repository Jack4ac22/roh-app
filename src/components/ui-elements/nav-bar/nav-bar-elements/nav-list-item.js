import Link from "next/link";
export default function NavListItem(props) {
  const item = props.item;

  return (
    <>
      <li>
        <Link href={"/"}>link2</Link>
      </li>
    </>
  );
}
