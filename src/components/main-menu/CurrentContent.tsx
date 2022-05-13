import { useCallback } from "react";
import { Route } from "react-router-dom";
import { GenreSelection } from "../section-content";
import { Info } from "../section-content";
import { Rating } from "../section-content";
import { Release } from "../section-content";
import { CONTENT_TYPE } from "./consts";
import { IMainMenu } from "./types";

export const CurrentContent: React.FC<Partial<IMainMenu>> = ({ id }) => {

  const selectContent = useCallback(() => {
    switch (id) {
      case 1:
        return <Info />;
      case 2:
        return <GenreSelection type={CONTENT_TYPE.FILMS} />;
      case 3:
        return <GenreSelection type={CONTENT_TYPE.FILMS} />;
      case 4:
        return <Release />;
      case 5:
        return <Rating />;
    }
  }, [id]);

  if(!id) {
    return <></>;
  }

  return (
    <>{selectContent()}</>
  )
};