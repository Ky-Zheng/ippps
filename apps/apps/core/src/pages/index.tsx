import { Card } from "ui";

const apps = [
  {
    title: "Recommendations",
    description: "Get and rate your recommendations ",
    path: "/recommendations",
  },
  {
    title: "LTV",
    description: "Check your LTV ",
    path: "/ltv",
  },
];

 

export default function Home() {
  return (
    <div className="grid grid-rows-4 gap-4 h-screen bg-green">
      {apps.map((app) => (
        <Card title={app.title} description={app.description} path={app.path} />
      ))}
    </div>
  );
}
;

