import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";

import { images } from "../../constants";
import { createUser } from "../../lib/appwrite";
import { CustomButton, FormField } from "../../components";
import { useGlobalContext } from "../../context/GlobalProvider";

const SignUp = () => {
  const { setUser, setIsLogged } = useGlobalContext();

  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submit = async () => {
    if (form.username === "" || form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);
    try {
      const result = await createUser(form.email, form.password, form.username);
      setUser(result);
      setIsLogged(true);

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      {/* Background gradient */}
      <View className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-dark-900" />

      {/* Background decoration */}
      <View className="absolute top-20 right-10 w-32 h-32 rounded-full bg-secondary-500/10 blur-3xl" />
      <View className="absolute bottom-40 left-10 w-40 h-40 rounded-full bg-accent-500/10 blur-3xl" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          className="w-full flex justify-center px-6 py-12"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          {/* Logo */}
          <View className="items-center mb-12">
            <View className="bg-dark-800/60 backdrop-blur-sm p-4 rounded-2xl shadow-soft border border-dark-700/50">
              <Image
                source={images.logo}
                resizeMode="contain"
                className="w-[120px] h-[36px]"
              />
            </View>
          </View>

          {/* Header */}
          <View className="mb-10">
            <Text className="text-3xl font-pbold text-white mb-2">
              Join Aora
            </Text>
            <Text className="text-lg text-light-300 font-pmedium">
              Create your account to get started
            </Text>
          </View>

          {/* Form */}
          <View className="space-y-6">
            <FormField
              title="Username"
              value={form.username}
              handleChangeText={(e) => setForm({ ...form, username: e })}
              placeholder="Choose a username"
            />

            <FormField
              title="Email Address"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              keyboardType="email-address"
              placeholder="Enter your email"
            />

            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              placeholder="Create a strong password"
            />

            <CustomButton
              title="Create Account"
              handlePress={submit}
              containerStyles="mt-8"
              isLoading={isSubmitting}
              variant="primary"
              size="large"
            />
          </View>

          {/* Footer */}
          <View className="flex justify-center pt-8 flex-row gap-2">
            <Text className="text-base text-light-300 font-pmedium">
              Already have an account?
            </Text>
            <Link
              href="/sign-in"
              className="text-base font-psemibold text-secondary-400"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
