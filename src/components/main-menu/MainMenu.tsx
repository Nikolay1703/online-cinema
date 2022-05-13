import TabPanel, { Item } from "devextreme-react/tab-panel";
import { itemNames } from "./consts";
import { CurrentContent } from "./CurrentContent";

export const MainMenu: React.FC = () => (
  <TabPanel height='max-content'>
    {
      itemNames.map((item) => (
        <Item title={item.title} key={item.id}>
          <CurrentContent id={item.id} />
        </Item>
      ))
    }
  </TabPanel>
);