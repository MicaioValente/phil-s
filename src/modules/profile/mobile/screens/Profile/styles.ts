import { StyleSheet } from 'react-native';
import { StackProps, TextProps } from 'tamagui';

export const styleFollowers: TextProps = {
  fow: 'bold',
  col: '$white1',
  fos: '$4',
  mr: 5,
};

export const styleFollowersSubtext: TextProps = {
  color: '#666666',
  fontSize: '$4',
};

export const styleDividers: StackProps = {
  h: 15,
  w: 1,
  bg: '$white1',
  mx: 10,
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242424',
  },
  profileWrapper: {},
  profileWallpaperContainer: {
    width: '100%',
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },
  profileWallpaper: {
    width: '100%',
    height: 200,
  },
  perfilContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    bottom: -50,
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  perfilImage: {
    width: 94,
    height: 94,
    borderRadius: 50,
  },
  buttonProfile: {
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: '#F58600',
    position: 'absolute',
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerName: {
    marginTop: 60,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  containerSite: {
    alignItems: 'center',
    paddingHorizontal: 30,
    marginBottom: 10,
  },
  site: {
    color: '#F58600',
    fontSize: 14,
  },
  containerFollowers: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  followers: {},
  followersNumber: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 14,
    marginRight: 5,
  },
  followersDivider: {
    height: 15,
    width: 1,
    backgroundColor: 'white',
    marginHorizontal: 10,
  },
  containerButton: {},
});
