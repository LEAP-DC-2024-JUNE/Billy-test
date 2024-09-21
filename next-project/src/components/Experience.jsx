import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const jobs = [
    {
      title: "Sr. Frontend Developer",
      descriptions: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
    {
      title: "Team Lead",
      descriptions: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
    {
      title: "Full Stack Developer",
      descriptions: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
  ];

  return (
    <div>
      {jobs.map((job) => {
        return (
          <ExperienceCard title={job.title} descriptions={job.descriptions} />
        );
      })}
      {/* <ExperienceCard title="Header 1" description={[1, 2]} /> */}
      {/* <ExperienceCard title="Header 2" description={[3, 4]} />
      <ExperienceCard title="Header 3" description={[5, 6]} />
      <ExperienceCard title="Header 4" description={[7, 8]} />
      <ExperienceCard title="Header 5" description={[9, 10]} />
      <ExperienceCard title="Header 6" description={[11, 12]} />
      <ExperienceCard title="Header 7" description={[13, 14]} /> */}
    </div>
  );
};

export default Experience;
