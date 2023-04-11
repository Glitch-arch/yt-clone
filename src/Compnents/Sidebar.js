import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../UTILS/constants";

const Sidebar = ({ setselectedCategory, selectedCategory }) => {
  return (
    <Stack
      className="no-scrollbar overflow-y-auto"
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
        gap: 1,
      }}
    >
      {categories.map((categorie) => {
        return (
          <button
            onClick={() => {
              setselectedCategory(categorie.name);
            }}
            className="rounded-2xl group hover:bg-[#FC1503]  px-2 py-1 hover: flex sm:justify-center sm:items-center md:justify-start md:items-start gap-3"
            style={{
              backgroundColor: categorie.name === selectedCategory && "#FC1503",
              color: "white",
            }}
            key={categorie.name}
          >
            <span
              className={`${
                selectedCategory === categorie.name
                  ? "text-white"
                  : "text-red-800"
              } group-hover:text-white duration-200 `}
            >
              {categorie.icon}
            </span>
            <span
              className={`${
                categorie.name === selectedCategory
                  ? "opacity-100"
                  : "opacity-90"
              }  group-hover:text-white duration-200`}
            >
              {" "}
              {categorie.name}{" "}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
