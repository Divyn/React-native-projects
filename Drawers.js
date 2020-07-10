import TodoListScreen from "./TodoListScreen";

export default function Drawers () {
    const Drawer = createDrawerNavigator();
    return (
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={TodoListScreen} />
            
          </Drawer.Navigator>
    )
  };