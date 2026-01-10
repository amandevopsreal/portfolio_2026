import { DATA } from "@/data/data"

export function TechnicalSkills() {
  return (
    <div id="skills" className="py-10">
      <h2 className="text-base font-medium text-primary/90">
        technical skills.
      </h2>
      <ul className="mt-4 flex flex-col gap-2 text-base font-normal text-primary/90">
        {DATA.skills.map((skill) => (
          <li
            className="grid"
            style={{ gridTemplateColumns: "100px 1fr" }}
            key={skill.title}
          >
            <p>{skill.title}:</p>
            <p className="text-sm text-muted-foreground">
              {skill.items.join(", ")}.
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
