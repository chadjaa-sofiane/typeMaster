import React from "react";
import { Link } from "react-router-dom";
import ExpandableMenuItem from "src/components/ExpandableMenuItem";
import MenuLink from "src/components/MenuLink";

function MainMenu() {
  return (
    <div className="flex flex-col grow bg-primary p-4 gap-4 rounded justify-center items-center">
      <ExpandableMenuItem
        title={"Practice"}
        items={[
          { title: "Character practice", link: "/practice/character" },
          { title: "Sentence practice", link: "/practice/sentence" },
        ]}
      />
      <MenuLink title="Tutorial" link={"/tutorial"} />
    </div>
  );
}

export default MainMenu;
