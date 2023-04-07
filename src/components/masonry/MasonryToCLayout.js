import MasonryLayout from "./MasonryLayout";
import glossaryData from "../data/glossaryData";

const MasonryLayout = ({ items }) => {
  const columns = useMedia(
    // Media queries
    [
      "(min-width: 768px)",
      "(min-width: 1024px)",
      "(min-width: 1280px)",
      "(min-width: 1536px)",
      "(min-width: 1920px)",
    ],
    // Column counts (corresponds with the media queries above)
    [1, 2, 3, 4, 5],
    // Default column count
    1
  );

  const columnWrapper = {};
  const result = [];

  // Create empty arrays for each column
  for (let i = 0; i < columns; i++) {
    columnWrapper[`column${i}`] = [];
  }

  // Split the items into their respective columns
  for (let i = 0; i < items.length; i++) {
    const columnIndex = i % columns;
    columnWrapper[`column${columnIndex}`].push(items[i]);
  }

  // Merge the columns back into a single array
  for (let i = 0; i < columns; i++) {
    result.push(
      <div key={i} className="mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10">
        {columnWrapper[`column${i}`].map((item, index) => (
          <div
            key={index}
            className="h-64 mb-6 bg-center bg-cover sm:h-72 md:h-80 lg:h-96 xl:h-112"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
              <h3 className="mb-2 text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                {item.title}
              </h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return <div className="flex flex-wrap">{result}</div>;
};

export default MasonryLayout;