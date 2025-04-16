import Link from "next/link";

export default function Prazerometro() {
  return (
    <div
      style={{
        display: "flex",
        padding: "2rem",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <p style={{ textAlign: "center" }}>
        Aqui ficará as informações sobre o curso Prazerometro
      </p>
      <Link href="/produtos" style={{ color: "blue" }}>
        &lt;Voltar
      </Link>
    </div>
  );
}
