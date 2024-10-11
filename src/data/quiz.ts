export const QUIZ = [
  {
    id: '1',
    title: 'Using States',
    level: 1,
    questions: [
      {
        title: 'Hooks are a way to work with functions in React instead of classes. useState and useEffect are examples of well-used hooks. However, it is still not possible to create our own hooks.',
        alternatives: [
          'True',
          'False'
        ],
        correct: 0
      },
      {
        title: 'Immutability in React is very important because if we directly mutate the value of a state instead of replacing it with a new value, a new render of the component does not occur correctly.',
        alternatives: [
          'True',
          'False'
        ],
        correct: 0
      },
      {
        title: 'Regarding rendering in React, mark the incorrect alternative:',
        alternatives: [
          'There are two common cases in which a React component is rendered: the initial rendering of the component and state updates.',
          'Re-renders usually do not recreate all components like the initial render.',
          'An update of a state in a parent component may cause a re-render of a child (nested) component.',
          'React does not follow a defined flow when rendering a screen, which can vary greatly in the steps of the process.'
        ],
        correct: 0
      },
    ]
  },
  {
    id: '2',
    title: 'Using TypeScript',
    level: 2,
    questions: [
      {
        title: "What type of assignment is this variable, `const fullName: string = 'Dylan Israel';`?",
        alternatives: [
          'Explicit',
          'Implicit'
        ],
        correct: 0
      },
      {
        title: "What is the type of `const example = ['Dylan']`?",
        alternatives: [
          'unknown[]',
          'string',
          'string[]',
          'any[]'
        ],
        correct: 2
      },
      {
        title: "keyof can be used with index signatures to extract the index type.",
        alternatives: [
          'True',
          'False',
        ],
        correct: 0
      },
    ]
  },
  {
    id: '3',
    title: 'React Navigation',
    level: 2,
    questions: [
      {
        title: 'What is the best description to identify the Stack Navigator?',
        alternatives: [
          'Adds a fixed menu at the bottom of the device, facilitating access to frequently used screens.',
          'When opening a new screen, this new screen is placed on top of the navigation stack, and when going back, the screens are removed from this stack.',
          'Adds a side menu that occupies the entire height of the device. Initially, this menu is hidden, and you can open the menu by dragging the screen.'
        ],
        correct: 1
      },
      {
        title: 'When "typing" the routes, you have the advantage of knowing during navigation whether a route receives parameters or not and what the format of the parameters is.',
        alternatives: [
          'True.',
          'False'
        ],
        correct: 0
      },
      {
        title: 'About the NavigationContainer, it is correct to state.',
        alternatives: [
          'The NavigationContainer is the component in which we create a route in the application, passing the "name" and "component" properties to it.',
          'The NavigationContainer is a “hook” exported from react navigation that allows us to access functions like "navigate" and "goBack".',
          'The NavigationContainer is a context that shares with our application all the routes and navigation properties.'
        ],
        correct: 2
      },
    ]
  },
  {
    id: '4',
    title: 'Styled Components',
    level: 3,
    questions: [
      {
        title: 'CSS-in-JS is the styling strategy where JavaScript is used to style components.',
        alternatives: [
          'True',
          'False'
        ],
        correct: 0
      },
      {
        title: 'Mark the alternative below that does not correspond to a feature of Styled Components.',
        alternatives: [
          'Import default styled and use it to create components (e.g., styled.View).',
          'It is possible to both create predefined styled components with "styled." and pass custom components to it by styled().',
          'The way to style components is quite similar to what we use when working directly with CSS (lowercase letters, hyphen-separated, and with semicolon at the end).',
          'It is possible to customize only the styles of the components (style prop) via styled, meaning it is not possible to configure other properties/attributes of the component.'
        ],
        correct: 1
      },
      {
        title: 'With Styled Components, it is possible to isolate the structure of the component from its styling.',
        alternatives: [
          'True',
          'False'
        ],
        correct: 0
      },
    ]
  },
  {
    id: '5',
    title: 'Local Storage',
    level: 2,
    questions: [
      {
        title: 'Which of the following methods saves information in AsyncStorage?',
        alternatives: [
          'AsyncStorage.removeItem',
          'AsyncStorage.setItem',
          'AsyncStorage.getItem'
        ],
        correct: 1
      },
      {
        title: 'What best describes Prop Drilling?',
        alternatives: [
          'Strategy where you pass properties between components until you reach the desired component.',
          'Strategy where you save information locally on the device (storage) and access it when needed.',
          'Strategy where you share information between components through contexts (Context API).'
        ],
        correct: 0
      },
      {
        title: 'What is the correct way to save objects in AsyncStorage?',
        alternatives: [
          "await AsyncStorage.setItem('@app:key', { id: 1, name: 'Item 1' });",
          "await AsyncStorage.getItem('@app:key', JSON.stringify({ id: 1, name: 'Item 1' }));",
          "await AsyncStorage.setItem('@app:key', JSON.stringify({ id: 1, name: 'Item 1' }));"
        ],
        correct: 2
      },
    ]
  },
  {
    id: '6',
    title: 'React Native',
    level: 1,
    questions: [
      {
        title: 'Mark the correct alternative about React Native:',
        alternatives: [
          'React Native is a JavaScript framework based on React capable of creating applications only for Android and iOS.',
          'Unlike React, React Native is entirely built by the community and has no relation to Facebook.',
          'With React Native, you can maintain almost your entire application with JavaScript and manipulate native code if necessary.',
          'Despite ReactJS’s prominence on the Web, React Native is not widely used in the job market for mobile development.'
        ],
        correct: 2
      },
      {
        title: 'Mark the incorrect alternative about React Native CLI and Expo',
        alternatives: [
          'Both React Native CLI and Expo can create applications for iOS and Android.',
          'React Native CLI is the "rawest" way to create a React Native project. Expo provides more features on top of that base, such as Expo Go.',
          'With Expo, it is possible to test iOS applications through Expo Go if you have a physical iOS device even if you do not have a macOS system, which is not possible with React Native CLI.',
          'The official documentation for React Native recommends only React Native CLI, not even mentioning Expo.'
        ],
        correct: 3
      },
      {
        title: 'About Expo, mark the correct alternative:',
        alternatives: [
          'Expo has two traditional paths for creating a project: Managed Workflow and Bare Workflow.',
          'Managed Workflow is the way to create projects where from the beginning you have access to your native code.',
          'With Bare Workflow, you cannot use Expo Go at any time.',
          'Setting up the React Native environment for Managed Workflow is more complex than for Bare Workflow.'
        ],
        correct: 0
      },
      {
        title: 'About componentization in React Native, choose the incorrect alternative:',
        alternatives: [
          'Componentization is a way to reuse code snippets in multiple locations of your code.',
          'One of the advantages of componentization is to simplify a very complex component into multiple smaller components, thus facilitating code maintenance.',
          'Although it helps in reuse and simplification of code, componentization reduces productivity and readability of the project.',
          'None is correct.'
        ],
        correct: 3
      },
    ]
  },
];
