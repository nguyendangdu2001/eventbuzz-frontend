import React from "react";

const SelfIntroduce = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-5">
        <img
          src="https://around.createx.studio/img/demo/food-blog/author.jpg"
          alt=""
        />
      </div>
      <div className="col-span-7 flex items-center">
        <div className="ml-24 space-y-6">
          <h1 className="font-bold text-4xl">Hi I'm .........</h1>
          <div className="font-semibold text-gray-500 text-lg">
            Amateur chef and creator of this blog
          </div>
          <div className="text-gray-500">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio.
          </div>
          <div className="p-4 rounded-2xl bg-indigo-500 text-gray-50 inline-flex shadow cursor-pointer font-semibold text-lg hover:shadow-md transition-all transform hover:-translate-y-1">
            Get to know me better
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfIntroduce;
