<div align="center">
  <img src="https://raw.githubusercontent.com/fasky-software/react-native-appgallery/main/assets/logod.svg" width="110" height="110"/>
</div>
<br>

# react-native-appgallery
![GitHub package.json version](https://img.shields.io/github/package-json/v/fasky-software/react-native-appgallery.svg)
[![GitHub license](https://img.shields.io/github/license/fasky-software/react-native-appgallery.svg)](https://github.com/sultan99/react-on-lambda/blob/master/LICENSE)

> A tiny library to support Huawei AppGallery in-app rating/commenting for React-Native

</br>
<div align="center">
  <img src="https://raw.githubusercontent.com/fasky-software/react-native-appgallery/main/assets/rate.png"/>
</div>

</br>

With this library you can open the native AppGallery in-app rating popup to allow an smooth rating/feedback process for your users.


## Installation

```sh
npm install react-native-appgallery
```

## Usage

```ts
import { rate } from "react-native-appgallery";

const result = await rate();
```

## Result

The function `rate` will throw an exception if AppGallery is not installed

| Code | Name                             | Description                                                                                                          |
|------|----------------------------------|----------------------------------------------------------------------------------------------------------------------|
| 0    | UNKNOWN_ERROR                    | Unknown error.                                                                                                       |
| 101  | APP_NOT_RELEASED                 | The app has not been released on AppGallery.                                                                         |
| 102  | RATING_SUBMITTED                 | Rating submitted.                                                                                                    |
| 103  | COMMENT_SUBMITTED                | Comment submitted.                                                                                                   |
| 104  | HUAWEI_ID_SIGN_IN_STATUS_INVALID | The HUAWEI ID sign-in status is invalid.                                                                             |
| 105  | USER_NOT_MEET_CONDITIONS         | The user does not meet the conditions for displaying the comment pop-up.                                             |
| 106  | COMMENT_DISABLED                 | The commenting function is disabled.                                                                                 |
| 107  | NOT_SUPPORTED                    | The in-app commenting service is not supported. (Apps released in the Chinese mainland do not support this service.) |
| 108  | CANCELLED                        | The user canceled the comment.                                                                                       |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
