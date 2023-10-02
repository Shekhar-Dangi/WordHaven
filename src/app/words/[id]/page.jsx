import React from "react";
import styles from "./page.module.css";
import ProfileS from "@/components/ProfileS/ProfileS";
import { getDate } from "@/utils/date";

const page = ({ params }) => {
  const post = {
    title: "This post teaches you about everything!",
    date: "2023-05-13T09:52:21.409Z",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minus tenetur accusantium voluptatum sapiente alias placeat voluptates veniam, iure similique. Voluptate, similique sit. Impedit quos beatae magnam mollitia totam soluta vitae sed dolor quis blanditiis odit, laborum quo recusandae nihil laboriosam expedita alias, praesentium atque accusantium! Labore laborum blanditiis nihil expedita totam eum fugit quod debitis veritatis, minima ipsa distinctio nostrum dolores praesentium suscipit vel amet quidem possimus eos necessitatibus nam! Ex maxime ipsa obcaecati dolores asperiores recusandae illo sequi explicabo ut quia mollitia ad omnis, repellendus fugit vitae praesentium optio, veritatis facilis? Assumenda ab fugit, totam quia labore eligendi. \n " +
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita id dolorem totam vel. Velit veniam veritatis repellat eveniet dolorem inventore culpa nostrum pariatur tempora! Quibusdam officia ab, error perspiciatis harum debitis optio dolorem deserunt libero sint sapiente ipsa rem ipsum dolores tempore inventore beatae autem, dolor dignissimos voluptatibus? Accusamus deserunt reiciendis nihil eius quas odit. Animi officiis ea nostrum consequatur itaque temporibus impedit quia rerum! Debitis deserunt iusto ad architecto excepturi et itaque tempore iure eaque dicta quo aliquid, totam minus expedita sunt mollitia nostrum delectus possimus nesciunt odit repellat! Quaerat adipisci deserunt illum voluptate facere quas debitis rem incidunt tenetur quasi soluta, rerum unde ad, labore blanditiis voluptas ipsum magni doloribus, earum sit! Perferendis ullam dicta, harum ea, quod porro molestiae maiores similique fugiat temporibus sint saepe voluptatibus? Nulla voluptate rerum magni odio commodi culpa sed necessitatibus incidunt reiciendis eveniet, possimus veritatis ipsa autem ipsam at quasi adipisci consectetur ullam, distinctio nesciunt aliquid. Ab, quisquam ipsum. Optio, officiis perferendis? Odit fuga velit recusandae laudantium porro ut quibusdam qui repellat, facilis voluptatibus commodi doloribus magni dolorum esse veritatis alias quod optio ad dolorem aut odio, harum, corrupti excepturi. Accusantium minima repudiandae soluta fugiat quia in qui tenetur fugit sapiente eum? Dolore, dolorum unde est placeat, ratione labore, corrupti eveniet provident nam temporibus culpa facilis nemo rerum sequi magni eius! Nesciunt, unde rem? Maxime ad quaerat consequatur. Accusantium voluptatem nesciunt dolores corrupti, tempore necessitatibus saepe nostrum in laborum eum, error exercitationem officia fugiat veniam. Placeat magnam enim, porro ullam aliquid in quis iste ipsa laudantium laboriosam qui numquam culpa, tempora omnis inventore rerum alias! Facilis cupiditate repudiandae totam est ab harum similique quam ipsam, reiciendis exercitationem quod eius molestiae adipisci explicabo, officia, blanditiis nulla vero? Consequatur soluta a quaerat quis ipsam. Ut animi ipsum nobis laudantium consequatur officiis repudiandae natus labore.",
  };
  const id = params.id;
  return (
    <div className={styles.container}>
      <h1 className={`f2 ${styles.heading}`}>{post.title}</h1>
      <div className={styles.info}>
        <ProfileS />
        &middot; <span>{getDate(post.date)}</span>
      </div>
      <p>{post.content}</p>
    </div>
  );
};

export default page;
