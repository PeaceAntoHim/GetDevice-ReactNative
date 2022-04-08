# How to fix this probleam if you got this error

`> Configure project :app
Unable to detect AGP versions for included builds. All projects in the build should use the same AGP version. Class name for the included build object: org.gradle.composite.internal.DefaultIncludedBuild$IncludedBuildImpl_Decorated.

FAILURE: Build failed with an exception.

* Where:
Build file 'C:\Users\user01\Documents\Absensi-Apps\Scan\android\app\build.gradle' line: 254

* What went wrong:
A problem occurred evaluating project ':app'.

C:\Users\user01\Documents\Absensi-Apps\Scan\android>
C:\Users\user01\Documents\Absensi-Apps\Scan\android>gradlew clean

> Configure project :app
Unable to detect AGP versions for included builds. All projects in the build should use the same AGP version. Class name for the included build object: org.gradle.composite.internal.DefaultIncludedBuild$IncludedBuildImpl_Decorated.

FAILURE: Build completed with 2 failures.

1: Task failed with an exception.
-----------
* Where:
Build file 'C:\Users\user01\Documents\Absensi-Apps\Scan\node_modules\react-native-camera-kit\android\build.gradle' line: 2
* What went wrong:
A problem occurred evaluating project ':react-native-camera-kit'.
> Plugin with id 'kotlin-android' not found.

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.
==============================================================================

2: Task failed with an exception.
-----------
* What went wrong:
A problem occurred configuring project ':react-native-camera-kit'.
> com.android.builder.errors.EvalIssueException: compileSdkVersion is not specified. Please add it to build.gradle        

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.
==============================================================================

* Get more help at https://help.gradle.org

Deprecated Gradle features were used in this build, making it incompatible with Gradle 8.0.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

See https://docs.gradle.org/7.3.3/userguide/command_line_interface.html#sec:command_line_warnings

BUILD FAILED in 10s
6 actionable tasks: 6 up-to-date

C:\Users\user01\Documents\Absensi-Apps\Scan\android>gradlew clean

> Configure project :app
Unable to detect AGP versions for included builds. All projects in the build should use the same AGP version. Class name for the included build object: org.gradle.composite.internal.DefaultIncludedBuild$IncludedBuildImpl_Decorated.

FAILURE: Build completed with 2 failures.

1: Task failed with an exception.
-----------
* Where:
Build file 'C:\Users\user01\Documents\Absensi-Apps\Scan\node_modules\react-native-camera-kit\android\build.gradle' line: 2
* What went wrong:
A problem occurred evaluating project ':react-native-camera-kit'.
> Plugin with id 'kotlin-android' not found.

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.
==============================================================================

2: Task failed with an exception.
-----------
* What went wrong:
A problem occurred configuring project ':react-native-camera-kit'.
> com.android.builder.errors.EvalIssueException: compileSdkVersion is not specified. Please add it to build.gradle        

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.
==============================================================================`

## This are the solution

# Add Kotlin Support for Android

1. Open and edit android/build.gradle

Add the `kotlin_version` to `buildscript.ext`

```
buildscript {
  ext {
        ...
        kotlin_version = '1.5.10'
  }
```

Add `google()` to the `buildscript.repositories` and `allprojects.repositories`

```
buildscript {
    repositories {
        ...
        google()
    }
}

allprojects {
    repositories {
        ...
        google()
    }
}
```

Add the Kotlin classpath to `buildscript.dependencies`

```
dependencies {
    ...
    classpath("com.android.tools.build:gradle:7.0.2") // or recent
    classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version")
}
```

2. Open and edit android/app/build.gradle

Add Kotlin imports

```
apply plugin: "kotlin-android"
apply plugin: "kotlin-android-extensions"
```