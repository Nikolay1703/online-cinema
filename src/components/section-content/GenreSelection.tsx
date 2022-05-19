import { Drawer, Toolbar } from "devextreme-react";
import { useCallback, useState } from "react";
import { CONTENT_TYPE } from "../main-menu";
import { Films } from "./Films";
import { GenreRoute } from "./GenreRoute";
import { NavigationList } from "./NavigationList";
import { Serial } from "./Serial";
import { ToolbarWrapper } from "./styled";
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
        closeOnOutsideClick={true}
        render={NavigationList}
        height='max-content'>
        <GenreRoute />
      </Drawer>
    </>
  )
};