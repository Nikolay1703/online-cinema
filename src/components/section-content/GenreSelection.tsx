import { Drawer, Toolbar } from "devextreme-react";
import { useCallback, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { CONTENT_TYPE } from "../main-menu";
import { Films } from "./Films";
import { NavigationList } from "./NavigationList";
import { Serial } from "./Serial";
import { ContentWrapper, ToolbarWrapper } from "./styled";
import { IGenreSelectionProps } from "./types";

export const GenreSelection: React.FC<IGenreSelectionProps> = ({ type }) => {

  const [isOpen, setIsOpen] = useState(true);

  const toolbarItems = [{
    widget: 'dxButton',
    location: 'before',
    options: {
      icon: 'menu',
      onClick: () => setIsOpen(!isOpen),
    },
  }];

  const getCurrentContent = useCallback(() => {
    if (type === CONTENT_TYPE.FILMS) return <Films />;
    if (type === CONTENT_TYPE.SERIAL) return <Serial />;
  }, [type]);

  return (
    <>
      <ToolbarWrapper>
        <Toolbar items={toolbarItems} />
      </ToolbarWrapper>
      <Drawer
        opened={isOpen}
        openedStateMode='shrink'
        position="before"
        revealMode='slide'
        component={NavigationList}
        closeOnOutsideClick={true}
        height='max-content'>
        <div id="content" className="dx-theme-background-color">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </Drawer>
    </>
  )
};