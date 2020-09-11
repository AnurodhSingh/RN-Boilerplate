import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import styles from './styles';

export default function TabViewComponent() {
  const FirstRoute = () => <View key={0} style={styles.firstScene} />;
  const SecondRoute = () => <View key={1} style={styles.secondScene} />;

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = Animated.color(
            Animated.round(
              Animated.interpolate(props.position, {
                inputRange,
                outputRange: inputRange.map(inputIndex =>
                  inputIndex === i ? 255 : 0,
                ),
              }),
            ),
            0,
            0,
          );

          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => setIndex(i)}>
              <Animated.Text style={{color: color}}>
                {route.title}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TabView
        renderTabBar={_renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={i => {
          setIndex(i);
        }}
      />
    </View>
  );
}
