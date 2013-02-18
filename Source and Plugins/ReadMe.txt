HTML5 Facebook Login for Android

Step 1. Create a basic Hello World application from the following link :
 
   http://docs.phonegap.com/en/2.2.0/guide_getting-started_android_index.md.html#Getting%20Started%20with%20Android

2. Include the Facebook plugin by adding the follwing to xml/config.xml

       <plugin name="org.apache.cordova.facebook.Connect" value="org.apache.cordova.facebook.ConnectPlugin" />

3. Copy the folders 'res' and 'src' to your Android Project.
   DO NOT overwrite the existing files.


4. Find FbDialog.java under com.facebook.android and add In line no. 42 Replace the following with your Project package name and namespace.

   -   import com.yourpackagename.namespace.*;

   package and namespace has to be same as the one created in the beginning.


5. Replace the 'www' folder in the assets with the downloaded 'www' folder.


7. In index.html (line no.65) Replace the 'appId' with the 'appId' obtained from Facebook developers.

   To get the ‘appId’ go to https://developers.facebook.com/apps and create an application. You will be given an appId.

8. Run the Application. After successfull login, facebook returns 

   - User Profile picture.
   - User Full name.
   - User id.
   - User location.
   - User gender.
   - User email.

9. To retrieve more information about the user, check 

   https://developers.facebook.com/docs/reference/api/user/


Quick Download :

1. Download the project 'FBlogin' and import into your Eclipse Workspace
2. Change build path for cardova
   Right click on android project -> Properties -> Build Path --> Change to existing cardova.jar path
3. Change 'appId' to the appId obtained from Facebook
4. Run the Android application.

Tested Conditions:

1. Cardova - Cardova 1.9 through Cardova 2.3
2. Android - Android 2.2 through Android 4.0
3. Connectivity - Wi-fi, 3G, GPRS

Errors:

1. "An error occurred, Please try again later"
   - Make sure to replace 'appID' with your obtained 'appId'
