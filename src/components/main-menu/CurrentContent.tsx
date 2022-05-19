import { useCallback } from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { GenreSelection } from "../section-content";
import { Info } from "../section-content";
import { Rating } from "../section-content";
import { Release } from "../section-content";
import { valuesSelector } from "../selectors";
import { CONTENT_TYPE } from "./consts";
import { IMainMenu } from "./types";

export const CurrentContent: React.FC<Partial<IMainMenu>> = ({ id }) => {

  const data = useSelector(valuesSelector);                        //////////////////////////

  console.log('1111111111111111111111111111111111111111111111111111111111111111111111111', data);

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