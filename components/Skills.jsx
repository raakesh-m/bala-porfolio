import Image from "next/image";
import React from "react";
import Kubernetes from "../public/assets/skills/kubernetes.png";
import Terraform from "../public/assets/skills/terraform.png";
import Prometheus from "../public/assets/skills/prometheus.png";
import Azure from "../public/assets/skills/azure.png";
import GCP from "../public/assets/skills/cloud.png";
import Ansible from "../public/assets/skills/ansible.png";

import Grafana from "../public/assets/skills/grafana.png";
import AWS from "../public/assets/skills/aws.png";
import Jenkins from "../public/assets/skills/jenkins.png";
import Docker from "../public/assets/skills/docker.png";
import Linux from "../public/assets/skills/linux.png";
import Github from "../public/assets/skills/github.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full  lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-2xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4 font-semibold text-2xl">
          These are the technologies I've worked with
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 dark:bg-gray-200 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4  justify-center items-center">
              <div className="m-auto">
                <Image src={Github} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="dark:text-gray-800">GitHub</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 dark:bg-gray-200 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Jenkins} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="dark:text-gray-800">Jenkins</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 dark:bg-gray-200 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={AWS} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="dark:text-gray-800">AWS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 dark:bg-gray-200 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Linux} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="dark:text-gray-800">Linux</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 dark:bg-gray-200 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Docker} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="dark:text-gray-800">Docker</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 dark:bg-gray-200 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Kubernetes} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="dark:text-gray-800">Kubernetes</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 dark:bg-gray-200 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Terraform} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="dark:text-gray-800">Terraform</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 dark:bg-gray-200 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Prometheus} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="dark:text-gray-800">Prometheus</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 dark:bg-gray-200 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Grafana} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="dark:text-gray-800">Grafana</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 dark:bg-gray-200 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Azure} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="dark:text-gray-800">Azure </h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 dark:bg-gray-200 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={GCP} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="dark:text-gray-800">GCP</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 dark:bg-gray-200 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Ansible} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="dark:text-gray-800">Ansible</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
