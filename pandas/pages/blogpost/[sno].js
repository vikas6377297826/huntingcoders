import React from "react";
import { useRouter } from "next/router";

const sno = () => {
  const router = useRouter();

  const { sno } = router.query;

  return (
    <div>
      this is sno <h1>{sno}</h1>
    </div>
  );
};

export default sno;
