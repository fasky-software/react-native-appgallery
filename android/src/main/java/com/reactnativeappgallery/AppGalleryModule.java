package com.reactnativeappgallery;

import android.app.Activity;
import android.content.Intent;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = AppGalleryModule.NAME)
public class AppGalleryModule extends ReactContextBaseJavaModule implements ActivityEventListener {
    public static final String NAME = "AppGallery";

    private Promise promise;

    public AppGalleryModule(ReactApplicationContext context) {
      super(context);
      context.addActivityEventListener(this);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    @ReactMethod
    public void rate(Promise promise) {
      this.promise = promise;
      try {
        Intent intent = new Intent("com.huawei.appmarket.intent.action.guidecomment");
        intent.setPackage("com.huawei.appmarket");
        super.getCurrentActivity().startActivityForResult(intent, 1001);
      } catch(Exception e) {
        promise.reject("0", "Huawei AppGallery not installed");
      }
    }

    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
      this.promise.resolve(resultCode);
    }

    @Override
    public void onNewIntent(Intent intent) {

    }
}
