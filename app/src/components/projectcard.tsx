export default function ProjectCard() {
  return (
    <div className="max-w-lg rounded-xl overflow-hidden shadow-lg">
      <img
        className="w-full"
        src="https://flowbite.com/docs/images/blog/image-1.jpg"
        alt="Mountain"
      />
      <div className="bg-stone-900 bg-opacity-30">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Mountain</div>
          <p className="text-gray-400 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
            quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium
            nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-purple-800 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-purple-800 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-purple-800 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </div>
  );
}
