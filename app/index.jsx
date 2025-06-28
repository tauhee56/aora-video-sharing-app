import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";

import { images } from "../constants";
import { CustomButton, Loader } from "../components";
import { useGlobalContext } from "../context/GlobalProvider";

const Welcome = () => {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-primary h-full">
      <Loader isLoading={loading} />

      {/* Background gradient */}
      <View className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-dark-900" />

      {/* Background decoration */}
      <View className="absolute top-20 right-10 w-32 h-32 rounded-full bg-secondary-500/10 blur-3xl" />
      <View className="absolute bottom-40 left-10 w-40 h-40 rounded-full bg-accent-500/10 blur-3xl" />

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 justify-center items-center px-6 py-12">
          {/* Logo */}
          <Animatable.View
            animation="fadeInDown"
            duration={1000}
            className="mb-8"
          >
            <View className="bg-dark-800/60 backdrop-blur-sm p-6 rounded-3xl shadow-strong border border-dark-700/50">
              <Image
                source={images.logo}
                className="w-[140px] h-[90px]"
                resizeMode="contain"
              />
            </View>
          </Animatable.View>

          {/* Hero Image */}
          <Animatable.View
            animation="fadeInUp"
            duration={1000}
            delay={200}
            className="mb-10"
          >
            <View className="relative">
              <Image
                source={images.cards}
                className="w-[350px] h-[280px]"
                resizeMode="contain"
              />
              {/* Glow effect */}
              <View className="absolute inset-0 bg-gradient-to-t from-secondary-500/20 to-transparent rounded-3xl blur-xl" />
            </View>
          </Animatable.View>

          {/* Main heading */}
          <Animatable.View
            animation="fadeInUp"
            duration={1000}
            delay={400}
            className="mb-6"
          >
            <View className="relative">
              <Text className="text-4xl text-white font-pbold text-center leading-tight">
                Discover Endless{"\n"}
                Possibilities with{" "}
                <Text className="text-transparent bg-gradient-to-r from-secondary-400 to-accent-400 bg-clip-text">
                  Aora
                </Text>
              </Text>

              <Image
                source={images.path}
                className="w-[120px] h-[12px] absolute -bottom-1 -right-6 opacity-80"
                resizeMode="contain"
              />
            </View>
          </Animatable.View>

          {/* Subtitle */}
          <Animatable.View
            animation="fadeInUp"
            duration={1000}
            delay={600}
            className="mb-10"
          >
            <Text className="text-base font-pmedium text-light-300 text-center leading-relaxed max-w-sm">
              Where Creativity Meets Innovation: Embark on a Journey of Limitless
              Exploration with Aora
            </Text>
          </Animatable.View>

          {/* CTA Button */}
          <Animatable.View
            animation="fadeInUp"
            duration={1000}
            delay={800}
            className="w-full max-w-sm"
          >
            <CustomButton
              title="Continue with Email"
              handlePress={() => router.push("/sign-in")}
              containerStyles="w-full"
              variant="primary"
              size="large"
            />
          </Animatable.View>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#0F0F23" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;
