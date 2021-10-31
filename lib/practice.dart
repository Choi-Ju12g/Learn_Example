import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  //const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'practice',
        theme: ThemeData(
          primarySwatch: Colors.amber,
        ),
        //home: MyHomePage(),
        home : homes()
        debugShowCheckedModeBanner: false
    );
  }
}

class homes extends StatelessWidget {
  const homes({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ;
  }
}



class MyHomePage extends StatelessWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return appBar: PreferredSize(
    preferredSize: Size.fromHeight(100.0),
    child: AppBar(
    automaticallyImplyLeading: false, // hides leading widget
    flexibleSpace: SomeWidget(),
    )
    ),


    //   DefaultTabController(
    //     length: 3,
    //     child: Scaffold(
    //       appBar:AppBar(
    //         title:Text('tab'),
    //         bottom:TabBar(
    //           tabs: <Widget>[
    //             Tab(icon:Icon(Icons.tag_faces)),
    //             Tab(icon:Icon(Icons.hardware)),
    //             Tab(icon:Icon(Icons.vertical_align_bottom_rounded)),
    //           ],
    //         ),
    //       ),
    //       body:TabBarView(
    //         children: <Widget>[
    //           Container(color:Colors.black12),
    //           Container(color:Colors.black),
    //           Container(color:Colors.yellowAccent),
    //         ],
    //       ),
    //       DropDownbutton:
    //     ),
    // ));

  }
}

appBar: PreferredSize(
preferredSize: Size.fromHeight(100.0),
child: AppBar(
automaticallyImplyLeading: false, // hides leading widget
flexibleSpace: SomeWidget(),
)
),