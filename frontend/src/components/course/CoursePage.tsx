"use client";

import React, { use } from "react";
import { Play, BookOpen, Award, Users } from "lucide-react";
import { COURSE_MEETINGS } from "@/data";

export const SoftwareEngineeringBootcamp = () => {
  const [openMeeting, setOpenMeeting] = React.useState(null);

  const toggleMeeting = (meetingIndex: any) => {
    setOpenMeeting(openMeeting === meetingIndex ? null : meetingIndex);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Course Image Section */}
        <div className="relative group">
          <img
            src="/api/placeholder/800/600"
            alt="Bootcamp de Engenharia de Software"
            className="rounded-2xl shadow-2xl object-cover transform group-hover:scale-105 transition duration-300"
          />
        </div>

        {/* Course Details Section */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Bootcamp de Engenharia de Software
            </h1>
            <div className="flex space-x-4 text-gray-600 dark:text-gray-300 mb-6">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-primary-600" />
                <span>10 Encontros</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary-600" />
                <span>Nível: Intermediário</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-primary-600" />
                <span>Certificado</span>
              </div>
            </div>
          </div>

          {/* Course Curriculum Accordion */}
          <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-md">
            {COURSE_MEETINGS.map((meeting, index) => (
              <div
                key={`meeting-${index + 1}`}
                className="border-b dark:border-gray-700 last:border-b-0"
              >
                <button
                  onClick={() => toggleMeeting(index)}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-t-xl flex justify-between items-center"
                >
                  <span className="text-left font-semibold text-gray-800 dark:text-white">
                    Encontro {index + 1}: {meeting.title}
                  </span>
                  <span className="text-gray-500">
                    {openMeeting === index ? "▲" : "▼"}
                  </span>
                </button>

                {openMeeting === index && (
                  <div className="p-4 bg-gray-50 dark:bg-gray-900">
                    <p className="mb-3 text-gray-700 dark:text-gray-300">
                      <strong className="text-primary-600">Objetivo:</strong>{" "}
                      {meeting.objective}
                    </p>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                      {meeting.topics.map((topic, topicIndex) => (
                        <li
                          key={topicIndex}
                          className="flex items-center space-x-2"
                        >
                          <Play className="w-4 h-4 text-primary-500 flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Start Course Button */}
          <button
            onClick={() => (window.location.href = "/watch-course")}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
          >
            <Play className="w-6 h-6 mr-2" />
            Iniciar Curso
          </button>
        </div>
      </div>
    </div>
  );
};

export default SoftwareEngineeringBootcamp;
