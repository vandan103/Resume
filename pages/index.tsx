import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { projectListContext } from '../context';
import ProjectCard, { ProjectCardProps } from '../components/ProjectCard';
import { Anchor, Button, Hr } from '../components/customHtml';
import {
  SiSitecore,
  SiDotnet ,
  SiReact ,
  SiMongodb ,
  SiMysql ,
  SiTeamcity ,
  SiOctopusdeploy ,
  SiRedis ,
  SiJavascript ,
  SiHtml5 ,
  SiCss3 ,
  SiNextdotjs ,
  SiGithub,
  SiSap,
  SiSpringboot,
  SiSpring,
  SiApachekafka,
  SiDocker,
  SiJenkins,
  SiBitbucket,
  SiIntellijidea,
  SiMicrosoftsqlserver
} from "react-icons/si";
import {
  FaJava ,
} from "react-icons/fa";

import eInfochipsLogo from '../images/Einfochips Logo.png';
import innoventixSolutions from '../images/ebizz-logo.png';
import { IconType } from 'react-icons';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

/** Node Version for Project - 20.12.2 */

export default function Home() {
  const clientRouter = useRouter();

  const { projectList, setProjectList } = useContext(projectListContext);
  const [top6Projects, setTop6Projects] = useState<ProjectCardProps[]>([]);

  const professionalSkillList : IconType[] = [SiSap,SiSpringboot,SiSpring,FaJava,SiReact,SiNextdotjs,SiHtml5,SiCss3];
  const databaseList : IconType[] = [SiMysql,SiMongodb,SiRedis,SiMicrosoftsqlserver];
  const toolsList : IconType[] = [SiGithub,SiJenkins,SiDocker,SiApachekafka,SiBitbucket,SiIntellijidea];

  useEffect(() => {
    setTop6Projects(
      projectList.sort((a, b) => b.priority - a.priority).slice(0, 6),
    );
  }, [projectList]);

  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    'SAP Hybris Developer |',
    'Java Developer |',
    'Backend Developer |',
  ];
  const [text, setText] = useState('');
  const fullText = roles[roleIndex];

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(intervalId);
        setTimeout(() => {
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 1000);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [roleIndex]);

  return (
    <div className="relative my-10 sm:my-20">
      <div className="mt-10 sm:mt-20 flex">
        <div className="">
          <div className="text-4xl md:text-5xl font-medium">
            <div>Hey, I`m Vandan Bhingradiya</div>
            <div className="mt-4">
              <span className="hidden sm:inline-block sm:text-2xl mr-4 md:text-3xl">
                I`m a
              </span>
              <span className="text-v9-yellow whitespace-nowrap md:text-3xl sm:text-2xl text-xl">
                {text}
              </span>
            </div>
          </div>
          <div className="text-lg md:text-xl text-v9-light-grey font-light mt-4">
            Innovating the future, one line of code at a time. 🚀💡
          </div>
          <div className="text-v9-light-grey font-light mt-8">
            <p className="">
              I`m a developer based in{' '}
              <Anchor
                href="https://www.google.com/maps/place/Ahmedabad,+Gujarat/@23.0204741,72.4149257,11z"
                target="_blank"
                onClick={() => {}}
              >
                Ahmedabad, Gujarat
              </Anchor>
              , with 3 years of experience working with{' '}
              <span className="font-bold">SAP hybris , Java, Spring Boot ,Microservices</span>.
              Specialize in building , expectional website, applications and
              everything in between. Currently, I am looking for position where
              I get appreciation of my knowledge.
            </p>
          </div>
        </div>
      </div>

      {/**Experience Section */}
      <div className="mt-20 sm:mt-32">
        <div className="flex justify-between mb-6 items-center">
          <div className="text-4xl sm:text-5xl font-medium">Experience</div>
          <Button
            onClick={() => {
              clientRouter.push('/resume');
            }}
          >
            View Resume
          </Button>
        </div>
        <div className="text-v9-light-grey font-light mt-2 mb-4">
          For over 3 years, I have cultivated a deep understanding and expertise
          in <span className="">Software Engineering</span>, always prioritizing
          the users needs. In every project I undertake, my aim is to craft
          tailored, intuitive, and thoroughly tested experiences that align the
          goals of companies with the expectations of users.
        </div>
        <Hr width="100%" />
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="text-4xl xl:text-4xl mb-6 lg:mb-0 flex items-center justify-center text-v9-light-grey font-light">
            October 21 - Present
          </div>
          <div className="flex justify-center">
            <img
              src={eInfochipsLogo.src}
              alt="University of Phoneix Logo"
              className="h-16 mr-4 mt-1 hidden sm:block"
            />
            <div className="flex flex-col justify-between ml-6 sm:w-[500px]">
              <div className="text-v9-light-grey font-light">
                Full Stack Developer - 6 Months{' '}
              </div>
              <div className="text-lg sm:text-xl">
                Software Engineer at
                <Anchor href="https://www.einfochips.com">EInfochips</Anchor>|
                Project -<Anchor href="https://www.arrow.com">Arrow</Anchor>
              </div>
              <div className="text-light text-v9-light-grey mt-2">
                <ul className="list-disc">
                  <li>
                    Work on Technology like SAP hybris, Java , Spring Boot and
                    Microservices and for database mssql and mongo DB.
                  </li>
                  <li>
                    Deploy the build to Production & lower environment ,and also
                    work on production incidents.
                  </li>
                  <li>
                    Successfully Installed SAP Commerce Cloud vulnerability hotfix patch
                    in all environment.
                  </li>
                  <li>
                    Used Fortify tool for identifying and fixing security
                    vulnerabilities in software applications.
                  </li>
                  <li>Migrate project from Hybris Version 2205 to 2211</li>
                  <li>Upgraded Java Spring Boot framework 2.3.7 to 3.2.3</li>
                  <li>
                    Proficient in resolving website issues through technical SEO
                    audits to enhance search performance.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/** Uncomment for Trainee Engineer
        <Hr width="100%" />
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="text-4xl xl:text-4xl mb-6 lg:mb-0 flex items-center justify-center text-v9-light-grey font-light">
            Aug 2021 - Oct 2021
          </div>
          <div className="flex justify-center">
            <img
              src={eInfochipsLogo.src}
              alt="University of Phoneix Logo"
              className="h-16 mr-4 mt-1 hidden sm:block"
            />
            <div className="flex flex-col justify-between ml-6 sm:w-[500px]">
              <div className="text-v9-light-grey font-light">
                Trainee Engineer - 6 Months{' '}
              </div>
              <div className="text-lg sm:text-xl">
                Trainee Engineer at
                <Anchor href="https://www.einfochips.com">EInfochips</Anchor>
              </div>
              <div className="text-light text-v9-light-grey mt-2">
                <ul className="list-disc">
                  <li>
                    Learned about Java, Linux, Cloud - AWS, Azure, Critical
                    Analysis, emotional intelligence, logical thinking, ethics,
                    and management.
                  </li>
                  <li>
                    Developed Movie Management System project with responsive
                    web design.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        <Hr width="100%" />
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="text-4xl xl:text-4xl mb-6 lg:mb-0 flex items-center justify-center text-v9-light-grey font-light">
            Jan 2021 - May 2021
          </div>
          <div className="flex justify-center">
            <img
              src={innoventixSolutions.src}
              alt="University of Phoneix Logo"
              className="h-4 mr-4 mt-8 hidden sm:block"
            />
            <div className="flex flex-col justify-between ml-6 sm:w-[500px]">
              <div className="text-v9-light-grey font-light">
                Internship - 6 Months{' '}
              </div>
              <div className="text-lg sm:text-xl">
                Application Development at
                <Anchor href="https://www.ebizzinfotech.com/">
                  Ebizz Infotech
                </Anchor>
              </div>
              <div className="text-light text-v9-light-grey mt-2">
                <ul className="list-disc">
                  <li>
                    Developed Cross platform Application for online food order that can interact between customer
                    and restaurant partner to solve online food delivery problems.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Hr width="100%" />
        <div
          className="text-v9-light-grey underline hover:text-white"
          onClick={() => {
            window.open(
              'https://www.linkedin.com/in/vandan-bhingradiya-3414b0178/',
              '_blank',
            );
          }}
        >
          See my Recommendation on Linkedin
        </div>
      </div>

      {/** Professional Skillset*/}
      <div className="mt-20 sm:mt-32">
        <div className="text-4x1 sm:text-5xl font-medium">
          Professional Skillset
        </div>
        <div className="mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 grids-row-auto auto-rows-fr gap-x-6 gap-y-6">
            {professionalSkillList.map((professionalSkill: IconType, index) => (
              <div
                key={index}
                className="place-items-center text-5xl border border-[#C889E6] rounded-md hover:border-[#C573E6] hover:border-2 bg-v9-secondary-black transition-colors hover:shadow-md hover:shadow-[#5904A8]"
              >
                <div className="flex px-6 py-6 opacity-90  justify-center">
                  {React.createElement(professionalSkill as React.ElementType)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/**Database */}
      <div className="text-3xl font-medium mt-5 sm:mt-8">Database</div>
      <div className="mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 grids-row-auto auto-rows-fr gap-x-6 gap-y-6">
          {databaseList.map((database: IconType, index) => (
            <div
              key={index}
              className="place-items-center text-5xl border border-[#C889E6] rounded-md hover:border-[#C573E6] hover:border-2 bg-v9-secondary-black transition-colors hover:shadow-md hover:shadow-[#5904A8]"
            >
              <div className="flex px-6 py-6 opacity-90  justify-center">
                {React.createElement(database as React.ElementType)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/**Tools */}
      <div className="text-3xl font-medium mt-5 sm:mt-8">Tools (CI/CD)</div>
      <div className="mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 grids-row-auto auto-rows-fr gap-x-6 gap-y-6">
          {toolsList.map((tools: IconType, index) => (
            <div
              key={index}
              className="place-items-center text-5xl border border-[#C889E6] rounded-md hover:border-[#C573E6] hover:border-2 bg-v9-secondary-black transition-colors hover:shadow-md hover:shadow-[#5904A8]"
            >
              <div className="flex px-6 py-6 opacity-90  justify-center">
                {React.createElement(tools as React.ElementType)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*Projects Section*/}
      <div className="mt-20 sm:mt-32">
        <div className="flex justify-between mb-10 items-center">
          <div className="flex text-4xl sm:text-5xl font-medium">Projects</div>
          <Button onClick={() => {}}>View All</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grids-row-auto auto-rows-fr gap-x-5 gap-y-5">
          {top6Projects.map((project: ProjectCardProps, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      {/**Contact Email Section*/}
      {/*<div className="mt-20 sm:mt-32">
        <div className="text-4xl sm:text-5xl font-medium">Contact Me</div>
        <div className="font-light text-v9-light-grey mt-4 mb-10">
          Im always open to new opportunities and connections. Feel free to
          reach out to me at{' '}
          <Anchor href="mailto:curiouscreator1@proton.me">
          curiouscreator1@proton.me
          </Anchor>
          !
        </div>
        <EmailBox />
      </div>*/}
    </div>
  );
}
