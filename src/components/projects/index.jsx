"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectLayout from "./ProjectLayout";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const ProjectList = ({ projectsData }) => {
  const [selectedUser, setSelectedUser] = useState(projectsData[0]);

  return (
    <div className="w-full max-w-auto xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8">
      <div className="flex space-x-4 mb-6">
        {projectsData.map((user) => (
          <button
            key={user.id}
            onClick={() => setSelectedUser(user)}
            className={`px-4 py-2 rounded-lg ${
              selectedUser.id === user.id
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {user.name}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedUser.id}
          variants={container}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="space-y-6 md:space-y-8 flex flex-col items-center"
        >
          {selectedUser.projects.map((project, index) => (
            <ProjectLayout key={index} {...project} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProjectList;
