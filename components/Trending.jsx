import { useState } from "react";
import { ResizeMode, Video } from "expo-av";
import * as Animatable from "react-native-animatable";
import {
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

import { icons } from "../constants";

const zoomIn = {
  0: {
    scale: 0.95,
    opacity: 0.8,
  },
  1: {
    scale: 1,
    opacity: 1,
  },
};

const zoomOut = {
  0: {
    scale: 1,
    opacity: 1,
  },
  1: {
    scale: 0.95,
    opacity: 0.8,
  },
};

const TrendingItem = ({ activeItem, item }) => {
  const [play, setPlay] = useState(false);
  const isActive = activeItem === item.$id;

  return (
    <Animatable.View
      className="mr-6"
      animation={isActive ? zoomIn : zoomOut}
      duration={600}
      easing="ease-out"
    >
      <View className={`
        relative rounded-3xl overflow-hidden
        ${isActive ? 'shadow-strong' : 'shadow-medium'}
        border-2 ${isActive ? 'border-secondary-500/50' : 'border-dark-700/30'}
      `}>
        {play ? (
          <Video
            source={{ uri: item.video }}
            className="w-52 h-72 rounded-3xl bg-dark-800"
            resizeMode={ResizeMode.CONTAIN}
            useNativeControls
            shouldPlay
            onPlaybackStatusUpdate={(status) => {
              if (status.didJustFinish) {
                setPlay(false);
              }
            }}
            style={{
              borderRadius: 24,
            }}
          />
        ) : (
          <TouchableOpacity
            className="relative flex justify-center items-center"
            activeOpacity={0.9}
            onPress={() => setPlay(true)}
          >
            <ImageBackground
              source={{ uri: item.thumbnail }}
              className="w-52 h-72"
              resizeMode="cover"
            >
              {/* Gradient overlay */}
              <View className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

              {/* Content overlay */}
              <View className="absolute bottom-0 left-0 right-0 p-4">
                <Text
                  className="text-white font-psemibold text-sm mb-1"
                  numberOfLines={2}
                >
                  {item.title}
                </Text>
                <Text
                  className="text-light-300 font-pmedium text-xs"
                  numberOfLines={1}
                >
                  {item.creator?.username}
                </Text>
              </View>

              {/* Play button */}
              <View className="absolute inset-0 flex justify-center items-center">
                <View className={`
                  bg-white/20 backdrop-blur-sm rounded-full p-4
                  ${isActive ? 'shadow-glow' : 'shadow-soft'}
                  border border-white/20
                `}>
                  <Image
                    source={icons.play}
                    className="w-6 h-6"
                    resizeMode="contain"
                    tintColor="#FFFFFF"
                  />
                </View>
              </View>

              {/* Trending badge */}
              {isActive && (
                <View className="absolute top-3 left-3 bg-accent-500 px-2 py-1 rounded-lg">
                  <Text className="text-white text-xs font-psemibold">Trending</Text>
                </View>
              )}
            </ImageBackground>
          </TouchableOpacity>
        )}
      </View>
    </Animatable.View>
  );
};

const Trending = ({ posts }) => {
  const [activeItem, setActiveItem] = useState(posts[0]?.$id);

  const viewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
    }
  };

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <View>
      <FlatList
        data={posts}
        horizontal
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <TrendingItem activeItem={activeItem} item={item} />
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 70,
        }}
        contentOffset={{ x: 170 }}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
        }}
        snapToInterval={220} // Width of item + margin
        snapToAlignment="start"
        decelerationRate="fast"
      />
    </View>
  );
};

export default Trending;
