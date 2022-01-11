import { useSession, signIn } from "next-auth/react";
import Link from "next/link";

export default function privateSection() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <h1>Parte privada</h1>
        <Link href="/">
          <a>Volver al inicio</a>
        </Link>
      </>
    );
  }
  return (
    <>
      <h1>Parte privada bloqueada</h1>
      <p>Debes iniciar sesion para acceder a la parte privada</p>
      <button onClick={() => signIn()}>Sign in</button>
      <br></br>
      <Link href="/">
        <a>Volver al inicio</a>
      </Link>
    </>
  );
}
