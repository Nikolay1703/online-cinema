import 'devextreme/dist/css/dx.light.css';
import { Content, LatestNews } from './styled';
import { AuthorizationBlock, MainMenu } from './components';

export const App: React.FC = () => {

  return (
    <>
      <AuthorizationBlock />
      <Content>
        <LatestNews>Онлайн-кинотеатр</LatestNews>
        <MainMenu />
      </Content>
    </>
  )
};