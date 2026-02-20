"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/types/project";
import { profile } from "@/data/profile";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-cyan-400/60 bg-slate-950 p-6 text-cyan-50 shadow-neon"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Project Details</p>
                <h2 className="mt-2 text-2xl font-semibold text-cyan-100">{project.title}</h2>
              </div>
              <button
                type="button"
                className="rounded border border-cyan-300/70 px-2.5 py-1 text-xs hover:bg-cyan-400/20"
                onClick={onClose}
              >
                Close
              </button>
            </div>

            <img
              src={`/images/${project.image}`}
              alt={project.title}
              className="mb-4 h-64 w-full rounded-lg border border-cyan-600/50 object-cover"
              onError={(event) => {
                event.currentTarget.src = "/images/placeholder_default.svg";
              }}
            />

            <p className="text-sm leading-relaxed text-cyan-100/90">{project.fullDescription}</p>

            <div className="mt-4">
              <h3 className="text-sm font-semibold text-cyan-200">Tech Stack</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="rounded border border-cyan-600/80 bg-cyan-900/30 px-2 py-1 text-xs">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 border-t border-cyan-900/90 pt-4 text-xs text-cyan-300/90">
              <p>{profile.displayName}</p>
              <p>{profile.location}</p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
