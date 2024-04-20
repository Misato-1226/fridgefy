"use client";

import { useRouter } from "next/navigation";
import React from "react";

const CloseModalButton = () => {
  const router = useRouter();

  return (
    <div onClick={() => router.back()} className="text-2xl cursor-pointer">
      X
    </div>
  );
};

export default CloseModalButton;
