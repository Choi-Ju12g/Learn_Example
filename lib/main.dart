import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.lightGreen,
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        title: Text('Haksang Doctor'),
        centerTitle: true,
        elevation: 0.0,
        leading: RaisedButton(
          child:Text('LogIn'),
          color: Colors.orange,
          onPressed: (){
            
            },
        ),
      ),
      body: Container(
        color: Colors.green,
        width: 100,
        height: 100,
        padding: const EdgeInsets.all(8.0),
        margin: const EdgeInsets.all(8.0),
      ),
      bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType.fixed,

          items:[
        BottomNavigationBarItem(
            icon: Icon(Icons.home),
          title:Text('Home'),
        ),
        BottomNavigationBarItem(
          icon: Icon(Icons.trending_up),
          title:Text('Alarm'),
        ),
        BottomNavigationBarItem(
          icon: Icon(Icons.person),
          title:Text('Profile'),
        ),
        BottomNavigationBarItem(
          icon: Icon(Icons.notifications),
          title:Text('Alarm'),
        ),

      ]),
    );
  }
}
//
// class _MyHomePageState extends State<MyHomePage> {
//   int _counter = 0;
//
//   void _incrementCounter() {
//     setState(() {
//       _counter++;
//     });
//   }
//
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//         title: Text(widget.title),
//       ),
//       body: Center(
//         child: Column(
//           mainAxisAlignment: MainAxisAlignment.center,
//           children: <Widget>[
//             const Text(
//               'You have pushed the button this many times:',
//             ),
//             Text(
//               '$_counter',
//               style: Theme.of(context).textTheme.headline4,
//             ),
//           ],
//
//         ),
//
//       ),
//
//
//       floatingActionButton: FloatingActionButton(
//         onPressed: _incrementCounter,
//         tooltip: 'Increment',
//         child: const Icon(Icons.add),
//       ), // This trailing comma makes auto-formatting nicer for build methods.
//     );
//   }
// }
