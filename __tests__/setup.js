import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'react-native-gesture-handler/jestSetup';
// import Moviess from 'MoviesApp/src/Api/movies'
Enzyme.configure({adapter: new Adapter()});

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => {},
    useRoute: () => ({params: {}}),
  };
});
jest.mock('react-native-image-picker', () => {
  return {
    launchImageLibrary: (_, cb) => {
      cb({uri: 'fakeUri'});
    },
  };
});
jest.mock('MoviesApp/src/Navigation/withNavigation', () => {
  return (component) => component;
});

jest.mock('MoviesApp/src/Api/movies', () => ({
  getMovies: jest.fn(() => {
    return new Promise((resolve, reject) => {
      resolve({data: {results: [{name: 'Batman'}]}});
    });
  }),
}));
