import DeskTop from "./desktop";
import Mobile from "./mobile";
import Tablet from "./tablet";
export default function NavBar() {
  return (
    <>
      <DeskTop />
      <Tablet />
      <Mobile />
    </>
  );
}
