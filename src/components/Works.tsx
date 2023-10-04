import first_img from '../assets/images/Group 110.png';
import second_img from '../assets/images/Group 111.png';
import third_img from '../assets/images/Group 113.png';

export type CardType = {
  imageSrc: string;
  altText: string;
};
function Card({ imageSrc, altText }: CardType) {
  //function for generating a card with an image.
  return (
    <div className="rounded-lg bg-white">
      <img src={imageSrc} alt={altText} />
    </div>
  );
}
export default function Works() {
  return (
    <div className="w-full">
      <div className="container mx-auto p-3 md:p-6">
        <h1 className="mb-6 text-center text-3xl font-semibold md:text-6xl lg:text-left">
          (OUR WORKS)
          <div className="mx-auto mt-6 w-40 border-b-2 border-gray-700 md:w-full "></div>
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          <Card imageSrc={second_img} altText="Sample Image1" />
          <Card imageSrc={first_img} altText="Sample Image1" />
          <Card imageSrc={third_img} altText="Sample Image1" />
          <Card imageSrc={first_img} altText="Sample Image1" />
        </div>
      </div>
    </div>
  );
}
