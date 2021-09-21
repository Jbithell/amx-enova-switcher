# AMX Enova Switcher

A React control panel for the AMX Enova Series of Switchers to replace the former Flash app running on the devices. The build folder from this project can be pushed over FTP to the device.

## Developing

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console. \
**Set the proxy in `package.json` to the address of your device to avoid CORS errors.**

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

## Deployment 

The AMX boxes accept plain (unsecured) FTP connections with a username of `administrator` and a password of `password`. 

Upload the contents of the `/build` folder (having run `npm run build` first) to `/amx-enova-switcher` on the device. When you access the device's IP in your browser you will then see "amx-enova-switcher" as a WebControl option. 

## License

**Please note this project is in no way affiliated/endorsed by AMX.** It was in part inspired by [this article](https://web.archive.org/web/20210921190755/https://support.polar.uk.com/support/solutions/articles/25000024996) and their helpful support team. 

```
Copyright (C) 2021 James Bithell

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
```