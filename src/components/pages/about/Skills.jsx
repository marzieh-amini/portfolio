import { useState, useEffect } from "react";

import Grid from "@mui/material/Unstable_Grid2";
import { Skill } from "..";
import { devSkills } from "../../../constants/skills";
const Skills = () => {
  const [javascript, setJavascript] = useState(0);
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [bootstrap, setBootstrap] = useState(0);
  const [reactJs, setReactJs] = useState(0);
  const [git, setGit] = useState(0);
  const [mui, setMui] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setJavascript((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 70);
      });

      setHtml((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 90);
      });

      setCss((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 73);
      });

      setReactJs((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 75);
      });

      setBootstrap((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 86);
      });

      setGit((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 35);
      });
      setMui((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 77);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const { htmlSkill, cssSkill, jsSkill, reactSkill, BootstrapSkill, gitSkill,muiSkill } =
    devSkills;

  return (
    <>
      <Grid container flexDirection={"row-reverse"}>
        <Skill
          name={htmlSkill.name}
          icon={htmlSkill.icon}
          color={htmlSkill.color}
          value={html}
        />
        <Skill
          name={cssSkill.name}
          icon={cssSkill.icon}
          color={cssSkill.color}
          value={css}
        />
        <Skill
          name={jsSkill.name}
          icon={jsSkill.icon}
          color={jsSkill.color}
          value={javascript}
        />
        <Skill
          name={reactSkill.name}
          icon={reactSkill.icon}
          color={reactSkill.color}
          value={reactJs}
        />
        <Skill
          name={BootstrapSkill.name}
          icon={BootstrapSkill.icon}
          color={BootstrapSkill.color}
          value={bootstrap}
        />
        <Skill
          name={gitSkill.name}
          icon={gitSkill.icon}
          color={gitSkill.color}
          value={git}
        />
        <Skill
          name={muiSkill.name}
          icon={muiSkill.icon}
          color={muiSkill.color}
          value={mui}
        />
      </Grid>
    </>
  );
};

export default Skills;
