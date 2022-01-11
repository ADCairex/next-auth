import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    console.log(session);
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <Link href="public_section">
          <a>
            <h2>Public section</h2>
          </a>
        </Link>
        <Link href="private_section">
          <a>
            <h2>Privat esection</h2>
          </a>
        </Link>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
      <Link href="public_section">
        <a>
          <h2>Public section</h2>
        </a>
      </Link>
      <Link href="private_section">
        <a>
          <h2>Private section</h2>
        </a>
      </Link>
    </>
  );
}
