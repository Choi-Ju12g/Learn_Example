import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  //const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Dc.학생',
      theme: ThemeData(
        //primarySwatch: Colors.amber,
      ),
      home: MyHomePage(),
      debugShowCheckedModeBanner: false
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
        backgroundColor: Color(0x555555ff),
        bottom: PreferredSize(
          child: Container(
            color:Colors.black12,
            height: 1.0,
          ),
          preferredSize: Size.fromHeight(1.0),
        ),

        // 메뉴 버튼
        leading: IconButton(
          icon: Icon(Icons.menu),

          onPressed: (){

          },
        ),

        // 로그인 버튼, 회원가입 버튼
        actions: <Widget>[
          ButtonTheme(
            minWidth: 30.0,
            height: 10.0,
            child: SizedBox(
              width: 56,
              height: 3,
              child: RaisedButton(
                child:Text('LogIn'),
                color: Colors.black12,
                onPressed: (){
                },
              ),
               RaisedButton(
                child: Text('SignIn'),
                color: Colors.black,
                onPressed: (){

                },
              )
            ),
          ),

          RaisedButton(
            child:Text('SignIn'),
            color: Colors.purpleAccent[100],
            onPressed: (){
            },
          )

        ],
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
      backgroundColor: Colors.white,
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

final Map<int, Color> _whiteMap = {
  50 : Color(0xFFFFFFFF),
};

final MaterialColor _whiteSwatch =
    MaterialColor(Colors.white.value, _whiteMap);