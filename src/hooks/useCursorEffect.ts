import { useEffect } from "react";

const useCursorEffect = () => {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.setAttribute("style", `top: ${e.clientY}px; left: ${e.clientX}px;`);
      }
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button")) {
        cursor?.classList.add("hover");
      }
    };

    const handleHoverOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button")) {
        cursor?.classList.remove("hover");
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleHover);
    document.addEventListener("mouseout", handleHoverOut);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleHover);
      document.removeEventListener("mouseout", handleHoverOut);
    };
  }, []);
};

export default useCursorEffect;
