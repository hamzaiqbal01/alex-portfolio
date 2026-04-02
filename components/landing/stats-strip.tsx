import { landingStats } from "@/content/landing";
import { Reveal } from "./reveal";

export function StatsStrip() {
  return (
    <div className="stats-strip">
      {landingStats.map((stat) => (
        <Reveal key={stat.label} className="stat" delayMs={stat.delayMs}>
          <div className="stat-num">{stat.num}</div>
          <div className="stat-label">{stat.label}</div>
        </Reveal>
      ))}
    </div>
  );
}
