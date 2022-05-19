import 'devextreme/dist/css/dx.light.css';
import { Content, LatestNews } from './styled';
import { AuthorizationBlock, MainMenu } from './components';
import 'devextreme/dist/css/dx.greenMist.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { mainPageActions } from './components/store';

export const App: React.FC = () => {

  const dispatch = useDispatch();                ///////////////////

  useEffect(() => {                           /////////////////////
    alert(2);
    dispatch(mainPageActions.getValues());
  }, []);

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