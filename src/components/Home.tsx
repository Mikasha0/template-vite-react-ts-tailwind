import Macbook from '../assets/images/MacBook Pro 16.png';
export default function Home() {
  return (
    <div className="w-full pb-4 pt-8">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="mb-6 text-center text-3xl font-semibold md:text-6xl">
          Innovación: Where Design Meets Code
        </h1>
        <div className="flex flex-col items-center justify-center space-y-4 md:flex-col md:space-x-8 md:space-y-0">
          <p className="text-md mb-5 mt-2 w-full text-center sm:w-1/2 md:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
            amet maximus neque. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Morbi sit amet maximus neque.
          </p>
          <img
            src={Macbook}
            alt="Sample Image"
            className="mx-auto max-w-full md:max-w-3xl"
          />
        </div>
      </div>
    </div>
  );
}
