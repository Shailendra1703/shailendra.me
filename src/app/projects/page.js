import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/constants/projects.config";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { FREELANCE_PROJECTS } from "@/constants/projects.config";
import { TimeLineCard } from "@/components/ui/timeline-card";
import { FiCornerUpLeft } from "react-icons/fi";

const BLUR_FADE_DELAY = 0.04;

export default function Projects() {
  return (
    <div className="flex flex-col min-h-[100dvh] max-w-3xl my-20 lg:mx-auto px-5">
      <Link href="/" className="exclude flex h-8 items-center text-neutral-500">
        <FiCornerUpLeft className="h-4 w-4" />
        <span className="ml-1.5 text-sm">Home</span>
      </Link>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <Tabs
            defaultValue="myworks"
            className="flex flex-col items-center justify-center w-full"
          >
            <TabsList className="grid md:w-[400px] w-[350px] grid-cols-2 my-4">
              <TabsTrigger value="myworks">My Works</TabsTrigger>
              <TabsTrigger value="clientworks">Freelance Works</TabsTrigger>
            </TabsList>
            <TabsContent value="myworks">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="space-y-12 w-full">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
                        Some cool stuff I&apos;ve built
                      </h2>
                      <p className="text-muted-foreground md:text-xl/relaxed lg:text-lg/relaxed xl:text-base/relaxed px-5">
                        I&apos;ve worked on a variety of projects, from simple
                        websites to complex web applications. Here are all of
                        them.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                    {PROJECTS.map((project, id) => (
                      <BlurFade
                        key={project.title}
                        delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                      >
                        <ProjectCard
                          href={project.href}
                          active={project.active}
                          archived={project.archived}
                          key={project.title}
                          title={project.title}
                          description={project.description}
                          dates={project.dates}
                          tags={project.technologies}
                          image={project.image}
                          video={project.video}
                          links={project.links}
                        />
                      </BlurFade>
                    ))}
                  </div>
                </div>
              </BlurFade>
            </TabsContent>
            <TabsContent value="clientworks">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="space-y-12 w-full">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl mt-2">
                        Your ideas & my skills
                      </h2>
                      <p className="text-muted-foreground md:text-base/relaxed lg:text-base/relaxed xl:text-base/relaxed px-5">
                        These projects showcase my client work across various
                        industries. If my skills align with your needs,
                        let&apos;s{" "}
                        <Link
                          href="https://cal.com/shailendra1703"
                          target="_blank"
                        >
                          <span className="text-blue-700">connect.</span>
                        </Link>
                      </p>
                    </div>
                  </div>
                  <section id="freelance-projects">
                    <div className="flex min-h-0 flex-col gap-y-3">
                      <BlurFade delay={BLUR_FADE_DELAY * 5}>
                        <h2 className="text-xl font-bold">Freelance Work</h2>
                      </BlurFade>
                      <BlurFade delay={BLUR_FADE_DELAY * 14}>
                        <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                          {FREELANCE_PROJECTS.map((project, id) => (
                            <BlurFade
                              key={project.title + project.dates}
                              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                            >
                              <TimeLineCard
                                title={project.title}
                                role={project.role}
                                description={project.description}
                                location={project.location}
                                dates={project.dates}
                                image={project.image}
                                links={project.links}
                              />
                            </BlurFade>
                          ))}
                        </ul>
                      </BlurFade>
                    </div>
                  </section>
                </div>
              </BlurFade>
            </TabsContent>
          </Tabs>
        </BlurFade>
      </section>
    </div>
  );
}
