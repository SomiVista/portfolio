<script setup lang="ts">
import {} from "vue";

interface ProjectType {
  thumbnil: string;
  title: string;
  description: string;
  link: string;
}

const fetchedProjects: ProjectType[] = [
  {
    thumbnil: "/assets/projects/Dreamdays.png",
    title: "Dreamdays",
    description:
      "Dreamdays, since 2005, offers 400+ unique experiences and exceptional service, making it the UAE's fastest-growing gift experience company with 12-month vouchers.",
    link: "https://dreamdays.ae/",
  },
  {
    thumbnil: "/assets/projects/SNAPDAQ.png",
    title: "SNAPDAQ",
    description:
      "Snapdaq streamlines data acquisition from sensors with customizable configurations and smart triggers. It allows users to view signals on mobile devices and export data to spreadsheets for easy sharing.",
    link: "https://dreamdays.ae/",
  },
  {
    thumbnil: "/assets/projects/Kubak.png",
    title: "Kubak",
    description:
      "Kubak delivers diverse IT solutions globally, including e-business, enterprise apps, and custom software. They handle everything from design to support, tailored to client needs.",
    link: "https://www.kubak.co/",
  },
  {
    thumbnil: "/assets/projects/Goranee.png",
    title: "Goranee.ir",
    description:
      "Goranee.ir is an innovative project focused on enhancing user engagement through modern web technologies.",
    link: "https://goranee.ir/",
  },
  {
    thumbnil: "/assets/projects/Jin724.png",
    title: "jin724com",
    description:
      "Providing affordable, instant, and easy services; promoting the culture of self-care, improving and reforming lifestyle, and protecting the environment in pursuit of comfort and peace for humanity.",
    link: "https://jin724.com/",
  },
  {
    thumbnil: "/assets/projects/Kurdcloud.png",
    title: "Kurdcloud",
    description:
      "Kurdcloud Computing Development Company, with 8 years of experience, specializes in software development, web design, and cloud services.",
    link: "https://kurdcloud.ir/",
  },
];

function isOdd(index: number): boolean {
  return index % 2 !== 0;
}
</script>

<template>
  <section id="projects" class="bg-gray-100 py-16">
    <div class="container mx-auto px-6 lg:px-20">
      <h2 class="text-4xl font-bold text-gray-900 text-center mb-12">
        Projects
      </h2>
      <div class="space-y-16">
        <div
          v-for="(project, index) in fetchedProjects"
          :key="project.title"
          class="flex flex-col lg:flex-row items-center bg-white"
          :class="isOdd(index) ? 'rounded-r-lg' : 'rounded-l-lg'"
        >
          <img
            :src="project.thumbnil"
            alt="Project Image 1"
            class="w-full lg:w-1/2 object-cover shadow-lg"
            :class="isOdd(index) ? 'rounded-r-lg lg:order-2' : 'rounded-l-lg'"
          />
          <div class="w-full lg:w-1/2">
            <h3 class="text-2xl font-semibold text-gray-800 mb-2 text-center">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 mb-4 text-justify m-8">
              {{ project.description }}
            </p>
            <div class="flex justify-center">
              <a
                :href="project.link"
                target="_blank"
                class="inline-block bg-transparent border border-yellow-500 text-yellow-500 font-semibold py-2 px-4 rounded hover:bg-yellow-500 hover:text-white transition-colors duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
