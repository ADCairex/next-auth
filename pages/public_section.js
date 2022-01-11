import Link from "next/link";

export default function publicSection() {
  return (
    <>
      <h2>Public Section</h2>
      <Link href="/">
        <a>Volver al inicio</a>
      </Link>
    </>
  );
}
