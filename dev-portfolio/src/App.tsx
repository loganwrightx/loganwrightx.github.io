import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const PROJECTS = [
  {
    title: "3D Object Detection with YOLOv7",
    summary: "Used PyTorch to fine-tune YOLOv7 on LiDAR data.",
    image: "project1.jpg",
    github: "https://github.com/yourname/yolov7-3d",
    youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    code: `# Sample Code\ndef detect():\n    print(\"Detecting...\")`
  },
  {
    title: "Realtime Signal Visualization",
    summary: "Interactive visualization of real-time signals in a web dashboard."
  }
];

const ResumeTab = () => {
  const [pin, setPin] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [message, setMessage] = useState("");

  const handleAuth = () => {
    if (pin.length !== 4 || isNaN(Number(pin))) {
      setMessage("PIN must be exactly 4 digits.");
      return;
    }
    if (pin === "1234") {
      setAuthorized(true);
      setMessage("Access granted. Welcome!");
    } else {
      setMessage("Incorrect PIN. Please try again.");
    }
  };

  return (
    <div className="p-4 space-y-4">
      {!authorized ? (
        <div className="space-y-2">
          <div className="flex gap-2 items-center">
            <Input
              placeholder="Enter 4-digit PIN"
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="max-w-[150px] text-white bg-[#1e1e1e] border border-[#3a3a3c]"
            />
            <Button onClick={handleAuth}>Unlock</Button>
          </div>
          {message && <p className="text-[#ff453a] text-sm">{message}</p>}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#32d74b] mb-2">Access granted. Viewing resume:</p>
          <iframe
            src={`${import.meta.env.BASE_URL}assets/resume.pdf`}
            title="Resume"
            className="w-full min-h-[90vh] border border-[#3a3a3c] rounded-xl"
          ></iframe>
        </motion.div>
      )}
    </div>
  );
};

const ProjectsTab = () => (
  <div className="grid gap-6 p-4">
    {PROJECTS.map((project, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: i * 0.1 }}
      >
        <Card className="bg-[#1e1e1e] text-[#f5f5f7] border border-[#3a3a3c] shadow-xl rounded-2xl overflow-hidden">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-2xl font-semibold text-[#64d2ff] tracking-tight">
              {project.title}
            </h2>
            {project.summary && (
              <p className="text-[#a9b0bd] italic text-sm">
                {project.summary}
              </p>
            )}
            {project.image && (
              <img
                src={project.image}
                alt="Project Image"
                className="rounded-lg w-full object-cover"
              />
            )}
            {project.youtube && (
              <div className="aspect-video border border-[#3a3a3c] rounded-xl overflow-hidden">
                <iframe
                  src={project.youtube}
                  className="w-full h-full"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            {(project.github || project.youtube) && (
              <div className="flex gap-6 pt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-[#ffd60a] hover:underline"
                  >
                    GitHub
                  </a>
                )}
              </div>
            )}
            {project.code && (
              <pre className="bg-[#2c2c2e] p-4 rounded-xl text-[#64d2ff] text-sm overflow-x-auto border border-[#3a3a3c]">
                <code>{project.code}</code>
              </pre>
            )}
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
);

export default function App() {
  return (
    <main className="relative min-h-screen w-screen text-[#f5f5f7] font-sans bg-gradient-to-br from-[#1c1c1e] to-[#2c2c2e] overflow-y-auto">
      <div className="absolute inset-0 -z-10 opacity-20 animate-pulse bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#2c2c2e] via-[#1c1c1e] to-black"></div>

      <div className="w-full max-w-6xl mx-auto pt-12 px-4 min-h-screen">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#f5f5f7] tracking-tight">Logan Wright</h1>
          <p className="text-[#d0d0d0] mt-2 text-lg font-light">Software Engineer • Developer Profile</p>
        </header>

        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="flex justify-center gap-4 bg-[#3a3a3c] rounded-xl p-2 border border-[#48484a]">
            <TabsTrigger value="projects" className="text-[#f5f5f7] hover:text-[#ffd60a] font-medium">
              Projects
            </TabsTrigger>
            <TabsTrigger value="resume" className="text-[#f5f5f7] hover:text-[#ffd60a] font-medium">
              Resume
            </TabsTrigger>
          </TabsList>
          <AnimatePresence mode="wait">
            <TabsContent value="projects">
              <ProjectsTab />
            </TabsContent>
            <TabsContent value="resume">
              <ResumeTab />
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </div>
    </main>
  );
}
