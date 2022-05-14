import { useState } from "react";

export default function ScrollPage() {
  const [height, setHeight] = useState(window.innerHeight);

    window.addEventListener("resize", ()=>setHeight(window.innerHeight))

  return (
    <div className="flex flex-col flex-1 justify-between">
      <div className="bg-white overflow-y-scroll text-xl h-full" style={{ height: `calc(${height}px - 129px)` }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vel porro quia nemo labore exercitationem iusto hic veritatis. Incidunt aspernatur quia eius expedita porro autem numquam quibusdam, maiores quaerat fugit.
        Quibusdam repellendus assumenda nostrum nesciunt optio quos ducimus cumque laboriosam dicta, iusto reiciendis quo nam impedit debitis culpa error sapiente excepturi porro adipisci ullam necessitatibus eum ab cum voluptates? Minus!
        Consectetur cum enim facere tempora ex adipisci explicabo vero, repellendus ipsum dolores, quia voluptate nemo quibusdam aliquam optio. Quo temporibus vitae dicta iusto odio, consectetur dolores. Velit magni debitis laborum!
        Itaque libero velit excepturi, dolores asperiores reiciendis ab blanditiis culpa nam magni tempora qui, voluptates, fuga expedita quaerat inventore iusto at corporis nisi placeat optio! Blanditiis delectus quasi veritatis earum!
        Quos recusandae veniam excepturi, ipsum fuga fugit, ipsam placeat, pariatur voluptatem iusto sequi eaque. Numquam rem excepturi at ipsam, ut, aliquid a vero molestiae hic dolore, natus magnam modi expedita.
        Reprehenderit cum in amet deleniti mollitia dolore itaque eum error enim, est voluptas, atque unde ipsum praesentium earum officia at quibusdam sit placeat explicabo animi adipisci nam. Laudantium, modi consectetur.
        Magnam distinctio delectus ab iste magni, id voluptatem neque praesentium alias fugit reprehenderit architecto aspernatur, tempora eos assumenda inventore voluptates officia quasi quidem nesciunt minus. Velit dolor sint magnam porro?
        Ut, laboriosam eius! Quis cumque vero officiis sed, soluta maxime tempora blanditiis quod odit iste nisi labore reiciendis accusamus illo expedita rem ratione tempore, necessitatibus unde quos sunt, neque assumenda.
        Earum perferendis explicabo quas eligendi molestiae libero quis odio esse rerum, animi similique sint numquam adipisci neque cupiditate officia, aspernatur accusantium accusamus ad. A provident, omnis et quas rem nisi.
        Illo, dicta sunt, quia error totam rerum cum dolorem reprehenderit facere commodi autem laboriosam excepturi id praesentium aliquam quibusdam quos! Quas reprehenderit quibusdam exercitationem enim ipsum quidem porro error modi!
      </div>
      <div className="flex m-2">
        <input type="text" className="w-full border-2 border-black" />
        <img src={require("./img/send.png")} alt="" width="40" className="ml-2" />
      </div>
    </div>
  );
}
