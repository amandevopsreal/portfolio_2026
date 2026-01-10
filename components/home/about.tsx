export function AboutMe() {
  return (
    <div id="aboutme" className="py-10">
      <h2 className="text-base font-medium text-primary/90">about me.</h2>
      <p className="mt-4 flex flex-col gap-2 text-base font-normal text-muted-foreground">
        <span>
          Hi! As a full-stack software engineer, I focus on building scalable, high-performance web applications that combine clean design with robust architecture. My work centers on developing reliable APIs, intuitive interfaces, and thoughtful features that solve real problems while delivering efficient, user-friendly digital experiences consistently. 
          {" "}
          <span className="hidden sm:inline">
            
          </span>
        </span>
        <span>
        Beyond engineering, I enjoy playing football, following geopolitics, and engaging in meaningful discussions. These interests keep me balanced, sharpen strategic thinking, and broaden my perspective beyond technology work.
        </span>
      </p>
    </div>
  )
}
