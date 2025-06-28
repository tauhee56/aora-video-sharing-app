import { useState } from "react";
import { ResizeMode, Video } from "expo-av";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { icons } from "../constants";

const VideoCard = ({ title, creator, avatar, thumbnail, video }) => {
  const [play, setPlay] = useState(false);

  return (
    <View className="mx-4 mb-8 bg-dark-800/60 backdrop-blur-sm rounded-3xl p-4 shadow-medium border border-dark-700/50">
      {/* Header with creator info */}
      <View className="flex flex-row items-center justify-between mb-4">
        <View className="flex flex-row items-center flex-1">
          <View className="w-12 h-12 rounded-2xl border-2 border-secondary-500/30 p-0.5 shadow-soft">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-xl"
              resizeMode="cover"
            />
          </View>

          <View className="flex-1 ml-3">
            <Text
              className="font-psemibold text-base text-white mb-1"
              numberOfLines={2}
            >
              {title}
            </Text>
            <Text
              className="text-sm text-light-400 font-pmedium"
              numberOfLines={1}
            >
              {creator}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          className="p-2 rounded-xl bg-dark-700/50"
          activeOpacity={0.7}
        >
          <Image
            source={icons.menu}
            className="w-5 h-5"
            resizeMode="contain"
            tintColor="#9CA3AF"
          />
        </TouchableOpacity>
      </View>

      {/* Video/Thumbnail */}
      {play ? (
        <Video
          source={{ uri: video }}
          className="w-full h-60 rounded-2xl"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPlay(false);
            }
          }}
          style={{
            borderRadius: 16,
          }}
        />
      ) : (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setPlay(true)}
          className="w-full h-60 rounded-2xl relative overflow-hidden shadow-strong"
          style={{
            elevation: 8,
          }}
        >
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full"
            resizeMode="cover"
          />

          {/* Gradient overlay */}
          <View className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Play button */}
          <View className="absolute inset-0 flex justify-center items-center">
            <View className="bg-white/20 backdrop-blur-sm rounded-full p-4 shadow-glow">
              <Image
                source={icons.play}
                className="w-8 h-8"
                resizeMode="contain"
                tintColor="#FFFFFF"
              />
            </View>
          </View>

          {/* Duration badge (optional - you can add duration prop) */}
          <View className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-lg">
            <Text className="text-white text-xs font-pmedium">5:24</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
