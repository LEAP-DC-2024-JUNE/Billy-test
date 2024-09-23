export const Introduction = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse p-24 justify-between pr-8 pl-8 gap-12 bg-stone-700">
      <div className="flex lg:flex-1 flex-col lg:items-end">Photo</div>

      <div className="flex flex-col gap-12 lg:flex-1">
        <div className="flex flex-col justify-center items-start gap-2 self-start">
          <div>Title</div>
          <p>
            I specialize in full stack development, particularly with React.js
            and Node.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. With over 7 years of experience in web development, I
            continue to find joy in crafting innovative solutions and designs.
          </p>
        </div>
        <div>
          <div>Location</div>
          <div> Available for job</div>
        </div>
        <div className="flex items-center gap-4">
          <div>Logo 1</div>
          <div>Logo 2</div>
          <div>Logo 3</div>
        </div>
      </div>
    </div>
  );
};
