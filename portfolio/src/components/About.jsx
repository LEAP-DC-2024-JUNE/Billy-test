import { Chip } from "./common/Chip";

export const About = () => {
  return (
    <div className="flex flex-col p-16 pl-4 pr-4 lg:p-8 lg:pt-24">
      <div className="flex justify-center pb-12">
        <Chip title={"About me"} />
      </div>
      <div className="lg:flex lg:gap-12">
        <div className="lg:flex-1 flex justify-center lg:justify-start">
          <img
            className="border-8 border-gray-50"
            src="https://via.placeholder.com/280x360"
          />
        </div>
        <div className="flex flex-col gap-6 pt-12 lg:flex-1">
          <div className="text-2xl font-semibold">
            Curious about me? Here you have it:
          </div>
          <div className="flex flex-col gap-4">
            <p>
              I'm a designer turned full stack developer, passionate about
              React.js and Node.js. I excel in blending technical and visual
              aspects to craft exceptional digital products, prioritizing user
              experience, precise design, and optimized code.
            </p>
            <p>
              I'm a designer turned full stack developer, passionate about
              React.js and Node.js. I excel in blending technical and visual
              aspects to craft exceptional digital products, prioritizing user
              experience, precise design, and optimized code.
            </p>
            <p>
              I'm a designer turned full stack developer, passionate about
              React.js and Node.js. I excel in blending technical and visual
              aspects to craft exceptional digital products, prioritizing user
              experience, precise design, and optimized code.
            </p>
            <div className="justify-start items-start gap-2.5 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                <li className="self-stretch text-gray-600 text-base font-normal leading-normal">
                  B.E. in Computer Engineering
                </li>
                <li className="self-stretch text-gray-600 text-base font-normal leading-normal">
                  Full time freelancer
                </li>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                <li className="self-stretch text-gray-600 text-base font-normal leading-normal">
                  Avid learner
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
