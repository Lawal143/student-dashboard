"use client";

import { useState } from "react";

interface Assignment {
  id: number;
  title: string;
  course: string;
  dueDate: string;
  completed: boolean;
}

export default function Home() {
  const [assignments, setAssignments] = useState<Assignment[]>([
    {
      id: 1,
      title: "Database Design",
      course: "CSC 301",
      dueDate: "October 28, 2026",
      completed: false,
    },
    {
      id: 2,
      title: "Software Engineering Project",
      course: "CSC 303",
      dueDate: "October 30, 2026",
      completed: false,
    },
    {
      id: 3,
      title: "Artificial Intelligence Assignment",
      course: "CSC 305",
      dueDate: "November 2, 2026",
      completed: false,
    },
  ]);

  const courses = [
    { code: "CSC 301", name: "Database Management", progress: 75 },
    { code: "CSC 303", name: "Software Engineering", progress: 60 },
    { code: "CSC 305", name: "Artificial Intelligence", progress: 85 },
  ];

  const completed = assignments.filter((a) => a.completed).length;

  function completeAssignment(id: number) {
    setAssignments(
      assignments.map((a) =>
        a.id === id ? { ...a, completed: true } : a
      )
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="flex items-center justify-between bg-white px-6 py-5 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-indigo-600">
            StudentHub
          </h1>
          <p className="text-sm text-gray-500">
            Student Dashboard
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="font-semibold">Haneefah Lawal</p>
            <p className="text-sm text-gray-500">
              Computer Science
            </p>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
            HL
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-8 p-6">

        {/* Welcome */}
        <section className="rounded-2xl bg-indigo-600 p-8 text-white">
          <p className="text-sm text-indigo-200">
            YOUR LEARNING SPACE
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Welcome back, Haneefah!
          </h2>

          <p className="mt-3">
            Keep learning, complete your assignments, and
            stay on top of your academic goals.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <span className="rounded-full bg-indigo-500 px-4 py-2 text-sm">
              Computer Science
            </span>
            <span className="rounded-full bg-indigo-500 px-4 py-2 text-sm">
              300 Level
            </span>
            <span className="rounded-full bg-indigo-500 px-4 py-2 text-sm">
              2026/2027 Session
            </span>
          </div>
        </section>

        {/* Summary Cards */}
        <section>
          <h2 className="mb-4 text-xl font-bold">
            Overview
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-500">
                Total Courses
              </p>
              <h3 className="mt-2 text-3xl font-bold text-indigo-600">
                {courses.length}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Courses this semester
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-500">
                Total Assignments
              </p>
              <h3 className="mt-2 text-3xl font-bold text-indigo-600">
                {assignments.length}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                All your assignments
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-500">
                Completed Assignments
              </p>
              <h3 className="mt-2 text-3xl font-bold text-green-600">
                {completed}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {assignments.length - completed} remaining
              </p>
            </div>

          </div>
        </section>

        {/* Courses */}
        <section>
          <h2 className="mb-4 text-xl font-bold">
            My Courses
          </h2>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.code}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-semibold text-indigo-600">
                  {course.code}
                </p>

                <h3 className="mt-2 text-lg font-bold">
                  {course.name}
                </h3>

                <div className="mt-5 flex justify-between text-sm">
                  <span className="text-gray-500">
                    Progress
                  </span>
                  <span className="font-semibold">
                    {course.progress}%
                  </span>
                </div>

                <div className="mt-2 h-2 rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full bg-indigo-600"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Assignments */}
        <section>
          <h2 className="mb-4 text-xl font-bold">
            My Assignments
          </h2>

          <div className="space-y-4">
            {assignments.map((assignment) => (
              <div
                key={assignment.id}
                className="flex flex-col justify-between gap-4 rounded-xl bg-white p-6 shadow-sm sm:flex-row sm:items-center"
              >
                <div>
                  <h3 className="font-bold">
                    {assignment.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {assignment.course}
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    Due: {assignment.dueDate}
                  </p>

                  <span
                    className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                      assignment.completed
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {assignment.completed
                      ? "Completed"
                      : "Pending"}
                  </span>
                </div>

                <button
                  onClick={() => completeAssignment(assignment.id)}
                  disabled={assignment.completed}
                  className={`rounded-lg px-5 py-3 text-sm font-semibold text-white ${
                    assignment.completed
                      ? "cursor-not-allowed bg-green-600"
                      : "bg-indigo-600 hover:bg-indigo-700"
                  }`}
                >
                  {assignment.completed
                    ? "Completed ✓"
                    : "Mark as Completed"}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-4 text-center text-sm text-gray-500">
          StudentHub © 2026 | Keep learning, keep growing.
        </footer>

      </div>
    </main>
  );
}