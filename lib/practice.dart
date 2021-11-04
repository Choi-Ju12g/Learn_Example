import 'package:flutter/material.dart';
import 'package:flutter/serverinfo.dart';
import 'package:flutter/serviceinfo.dart';
import 'package:flutter/utils.dart';

class StartPage extends StatelessWidget {
  StartPage({Key key, this.title, this.serverInfo}) : super(key: key);

  final String title;
  final Future<List<ServerInfo>> serverInfo;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(title),
        ),
        body: Center(
            child: FutureBuilder<List<ServerInfo>>(
                future: this.serverInfo,
                builder: (context, snapshot) {
                  switch (snapshot.connectionState) {
                    case ConnectionState.none:
                    case ConnectionState.waiting:
                      return CircularProgressIndicator();
                    default:
                      if (snapshot.hasError)
                        return new Text('Error: ${snapshot.error}');
                      else
                        return _buildGridView(context, snapshot.data);
                  }
                })));
  }

  class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
  final wordPair = WordPair.random();  // DELETE

  return MaterialApp(
  title: 'Welcome to Flutter',
  home: Scaffold(
  appBar: AppBar(
  title: Text('Welcome to Flutter'),
  ),
  body: Center(
  //child: Text(wordPair.asPascalCase), // REPLACE with...
  child: RandomWords(),                 // ...this line
  ),
  ),
  );
  }
  }