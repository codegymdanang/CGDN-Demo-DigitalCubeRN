#!/bin/bash

FIRST_ARGUMENT="$1"
SECOND_ARGUMENT="$2"
THIRD_ARGUMENT="$3"

if [ "$FIRST_ARGUMENT" = "a" ] ; then

  # Android handle
  case "$SECOND_ARGUMENT" in
    ("run-debug")
      react-native run-android ;;
    ("idevice")
      cd android
      adb install app/build/outputs/apk/release/app-release.apk
      cd .. ;;
    ("run-release")
      cd android
      ./gradlew assembleRelease
      if [ "$THIRD_ARGUMENT" = "idevice" ] ; then
        adb install app/build/outputs/apk/release/app-release.apk
      fi
      open app/build/outputs/apk/release/
      cd .. ;;
    ( * )
      react-native run-android ;;
  esac
fi

if [ "$FIRST_ARGUMENT" = "i" ] ; then

  # Ios handle
  case "$SECOND_ARGUMENT" in
    ("run-ios")
      open ios/belal.xcworkspace/ ;;
    ( * )
      open ios/belal.xcworkspace/ ;;
  esac
fi
