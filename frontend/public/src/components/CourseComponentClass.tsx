"use client";

export const CourseComponentClass = () => {
  return (
    <div className="mt-4">
      <h1 className="text-3xl font-medium">Engenharia de Software</h1>
      <div
        className="mt-4 relative"
        style={{ paddingBottom: "56.25%", height: 0 }}
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/vqajwQaCVkg"
          title="Engenharia de Software"
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
