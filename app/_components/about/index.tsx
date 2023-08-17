import { aboutLinks, regulationLinks } from "./links";

function About() {
  return (
    <div className="grid grid-cols-3 py-12 border-solid border-t-2">
      <div>
        {aboutLinks.map(({ id, title }) => (
          <h4 className="uppercase tracking-wider text-lg font-bold" key={id}>
            {title}
          </h4>
        ))}
      </div>
      <div>
        {regulationLinks.map(({ id, title }) => (
          <h4 className="uppercase tracking-wider text-lg font-bold" key={id}>
            {title}
          </h4>
        ))}
      </div>
      <div>
        <h4 className="uppercase tracking-wider text-lg font-bold text-gray-500">
          monstercat news
        </h4>
        <p className="italic text-lg text-gray-400 tracking-wide my-5">
          Don&apos;t miss a thing, stay up to date with the latest news from us.
        </p>
        <input
          className="bg-transparent border-solid border text-white px-8 italic py-2"
          type="text"
          placeholder="Enter email"
        />
      </div>
    </div>
  );
}

export default About;
