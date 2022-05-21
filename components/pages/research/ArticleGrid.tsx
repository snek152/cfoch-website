import Button from "@components/layout/Button";
import research from "@lib/data/research";

export default function ArticleGrid() {
  return (
    <div className="px-10 py-5">
      {research.length !== 0 ? (
        <div
          className={`grid mt-2 gap-5 grid-cols-1 ${
            research.length === 1 ? "sm:grid-cols-1" : "sm:grid-cols-2"
          }`}
        >
          {research.map((event) => (
            <div
              className="bg-lightgreen shadow-md flex justify-center items-center flex-col gap-2 p-5 rounded-xl"
              key={event.title}
            >
              <h2 className="text-2xl text-center font-display">
                {event.title}
              </h2>
              <p className="text-lg text-center font-light">
                {event.description}
              </p>
              <Button
                className="bg-black text-white"
                href={event.article}
                target="_blank"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <p className="italic text-center pt-2">
          No articles here! Check back later.
        </p>
      )}
    </div>
  );
}
