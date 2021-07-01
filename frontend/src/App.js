import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import {
  useAdaptivity,
  usePlatform,
  ViewWidth,
  AdaptivityProvider,
  AppRoot,
  Root,
  ConfigProvider,
  Panel,
  PanelHeader,
  Group,
  CellButton,
  Cell,
  SplitLayout,
  SplitCol,
  Epic,
  Tabbar,
  TabbarItem,
  PanelHeaderBack,
  Placeholder,
} from '@vkontakte/vkui';
import { Icon28NewsfeedOutline } from '@vkontakte/icons';
import '@vkontakte/vkui/dist/vkui.css';

import Login from './panels/login';
import Catalog from './panels/catalog';
import Cart from './panels/cart';
import Profile from './panels/profile';
import Product from './panels/product';
import HomeView from './views/homeView';
import ProfileView from './views/profileView';
const App = () => {
  const { viewWidth } = useAdaptivity();
  const platform = usePlatform();
  const [activeStory, setActiveStory] = useState('profile');
  const onStoryChange = (e) => {
    console.log(e.currentTarget.dataset.story);
    setActiveStory(e.currentTarget.dataset.story);
  };
  const isDesktop = viewWidth >= ViewWidth.TABLET;
  const hasHeader = platform !== ViewWidth.VKCOM;

  const [activeView, setActiveView] = useState('view1');
  const [catalogActivePanel, setCatalogActivePanel] = useState('home');
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout
            header={<PanelHeader separator={false} />}
            style={{ justifyContent: 'center' }}
          >
            <SplitCol
              animate={!isDesktop}
              spaced={isDesktop}
              width={isDesktop ? '560px' : '100%'}
              maxWidth={isDesktop ? '560px' : '100%'}
            >
              <Epic
                activeStory={activeStory}
                tabbar={
                  !isDesktop && (
                    <Tabbar>
                      <TabbarItem
                        onClick={onStoryChange}
                        selected={activeStory === 'home'}
                        data-story="home"
                        text="Главная"
                      >
                        <Icon28NewsfeedOutline />
                      </TabbarItem>
                      <TabbarItem
                        onClick={onStoryChange}
                        selected={activeStory === 'catalog'}
                        data-story="catalog"
                        text="Каталог"
                      >
                        <Icon28NewsfeedOutline />
                      </TabbarItem>
                      <TabbarItem
                        onClick={onStoryChange}
                        selected={activeStory === 'cart'}
                        data-story="cart"
                        label="12"
                        text="Корзина"
                      >
                        <Icon28NewsfeedOutline />
                      </TabbarItem>
                      <TabbarItem
                        onClick={onStoryChange}
                        selected={activeStory === 'profile'}
                        data-story="profile"
                        text="Профиль"
                      >
                        <Icon28NewsfeedOutline />
                      </TabbarItem>
                    </Tabbar>
                  )
                }
              >
                <HomeView id="home" />
                <ProfileView id="profile" />
                {/* <View id="home" activePanel="home">
                  <Home id="home" />
                  <Product id="product" />
                </View> */}
                <View id="catalog" activePanel="catalog">
                  <Catalog id="catalog" />
                </View>
                <View id="cart" activePanel="cart">
                  <Cart id="cart" />
                </View>
                {/* <View id="profile" activePanel="profile">
                  <Profile id="profile" />
                </View> */}
              </Epic>
            </SplitCol>
          </SplitLayout>
          {/* <Root activeView={activeView}>
            <View activePanel="panel1.1" id="view1">
              <Panel id="panel1.1">
                <PanelHeader>View 1</PanelHeader>
                <Group>
                  <CellButton onClick={() => setActiveView('view2')}>
                    Open View 2
                  </CellButton>
                </Group>
              </Panel>
            </View>
            <View header activePanel="panel2.1" id="view2">
              <Panel id="panel2.1">
                <PanelHeader>View 2</PanelHeader>
                <Group>
                  <CellButton onClick={() => setActiveView('view1')}>
                    Back to View 1
                  </CellButton>
                </Group>
              </Panel>
            </View>
          </Root> */}
          {/* <View activePanel="home">
            <Home id="home" />
            <Login id="login" />
          </View> */}
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
