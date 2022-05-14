export default function ScrollPage() {
  return (
    <div className="flex flex-col">
        <div className="bg-white overflow-y-scroll" style={{height: "calc(100vh - 130px)"}}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo rerum illum, voluptatem dicta ad impedit ipsum fugit incidunt reprehenderit neque eligendi rem odio commodi omnis dolorem velit corrupti et odit!
            Ratione perferendis ipsam aliquam illum alias quo dolore ea tenetur itaque. Error, ipsum qui et ullam id ducimus, suscipit nisi provident dolore eum tempora quia, numquam nemo corporis accusantium officia.
            Quos natus asperiores distinctio ullam modi, molestiae sequi pariatur laborum quaerat doloremque amet? Qui, maiores dolor autem incidunt dolorem doloribus veritatis quis voluptates? Aspernatur dolor odio, quidem facere officia amet.
            Veniam non possimus dolore aperiam iure ex voluptates eaque harum neque doloribus optio maxime dicta sunt, numquam distinctio expedita perspiciatis amet odit, error culpa? Odit vitae aliquid nisi incidunt natus?
            Enim, consequuntur ipsum aperiam, qui labore neque doloremque iusto necessitatibus accusantium iste fugiat provident asperiores perferendis voluptatibus velit! Repellendus modi voluptatum, veritatis eveniet quo id explicabo quod hic ipsam laudantium?
            Fuga odio quasi ratione voluptates obcaecati, quidem ex aliquam at totam ab quod beatae omnis qui a corrupti. Vero aliquam illum voluptates alias quasi ipsam facilis eligendi assumenda, cumque nobis?
            Illo iure facere neque, rem in culpa fugit ullam. Blanditiis inventore facilis tempora ad, atque, quos voluptates velit debitis ex non provident optio. Esse tenetur necessitatibus eos veniam officia adipisci.
            Eaque totam necessitatibus ipsa placeat qui, cum in. Inventore a quos vero debitis autem nobis consectetur, maiores accusantium voluptatum voluptas delectus, libero consequuntur quis recusandae exercitationem iusto accusamus assumenda soluta.
            Maiores, illo excepturi vel explicabo placeat fugit alias aut exercitationem, quas soluta commodi, id sapiente. Ipsam asperiores esse ad blanditiis optio officiis maiores, odio incidunt, omnis non et cupiditate corrupti!
            Eveniet minus cumque saepe odit eius, debitis natus, soluta illum ullam molestias amet ipsa consectetur sapiente exercitationem voluptatibus quidem nihil quod corrupti facere a magnam vitae. Rerum asperiores eius provident.
        </div>
        <div className="flex m-2 relative bottom-0">
            <input type="text" className="w-full border-2 border-black"/>
            <img src={require("./img/send.png")} alt="" width="40" className="ml-2"/>
        </div>
    </div>
  );
}
