export const dynamic = "force-dynamic";

type OkResult = { ok: true; data: unknown };
type ErrResult = {
  ok: false;
  status: number;
  statusText: string;
  message?: string;
  body?: unknown;
};
type FetchResult = OkResult | ErrResult;

const DIRECTUS_URL =
  process.env.NEXT_PUBLIC_DIRECTUS_URL || "http://192.168.0.115:8056";

async function fetchDirectus(path: string): Promise<FetchResult> {
  const url = `${DIRECTUS_URL}${path.startsWith("/") ? path : `/${path}`}`;
  try {
    const res = await fetch(url, {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });

    const isJson = (res.headers.get("content-type") || "").includes(
      "application/json"
    );

    let body: unknown;
    if (isJson) {
      body = await res.json();
    } else {
      body = await res.text();
    }

    if (!res.ok) {
      let message: string | undefined = undefined;
      if (isJson && body && typeof body === "object") {
        const anyBody = body as any;
        message =
          anyBody?.errors?.[0]?.message || anyBody?.error?.message || undefined;
      } else if (typeof body === "string") {
        message = body;
      }
      return {
        ok: false,
        status: res.status,
        statusText: res.statusText,
        message,
        body,
      };
    }

    return { ok: true, data: body };
  } catch (e: any) {
    return {
      ok: false,
      status: 0,
      statusText: "Network Error",
      message: e?.message || String(e),
    };
  }
}

function Section({
  title,
  result,
}: {
  title: string;
  result: FetchResult;
}) {
  const payload = result.ok
    ? result.data
    : {
        status: result.status,
        statusText: result.statusText,
        message: result.message,
        body: result.body,
      };

  return (
    <section style={{ marginBottom: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 600 }}>{title}</h2>
      <pre
        style={{
          background: "#0b1020",
          color: "#e6edf3",
          padding: 12,
          borderRadius: 8,
          overflowX: "auto",
        }}
      >
        {JSON.stringify(payload, null, 2)}
      </pre>
    </section>
  );
}

export default async function Page() {
  const [homeHighlights, services, campaigns] = await Promise.all([
    fetchDirectus(
      "/items/home_highlights?fields=id,type,title,priority,is_active,cta_route,cta_url&sort=priority"
    ),
    fetchDirectus(
      "/items/services?fields=id,title,slug,category.name,tags.name,documents.name,units.name&limit=3"
    ),
    fetchDirectus(
      "/items/campaigns?fields=id,title,services.title,courses.title&limit=3"
    ),
  ]);

  return (
    <main style={{ padding: 24, maxWidth: 960, margin: "0 auto" }}>
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>/debug/directus</h1>
      <p style={{ marginTop: 4, marginBottom: 16, color: "#6b7280" }}>
        Base URL: {DIRECTUS_URL}
      </p>

      <Section title="home_highlights" result={homeHighlights} />
      <Section title="services (limit=3)" result={services} />
      <Section title="campaigns (limit=3)" result={campaigns} />
    </main>
  );
}
